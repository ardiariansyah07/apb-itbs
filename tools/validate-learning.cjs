'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const {audit}=require('../assets/bpmn-lab-validation.js');
let slides=0,quizzes=0,practices=0;const documents=fs.readdirSync(root).filter(f=>f.endsWith('.html'));
for(const file of documents){
 const h=fs.readFileSync(path.join(root,file),'utf8');
 assert.match(h,/<html\b[^>]*lang="id"/i,file+' language');
 const ids=[...h.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,file+' duplicate IDs');
 for(const m of h.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi))new vm.Script(m[1],{filename:file});
 for(const m of h.matchAll(/(?:href|src)="([^"]+)"/g)){
  const ref=m[1];if(/^(https?:|data:|mailto:|javascript:)/.test(ref))continue;
  const local=decodeURIComponent(ref.split(/[?#]/)[0]);if(!local)continue;
  const target=path.resolve(root,local);assert.ok(target.startsWith(root+path.sep),file+' path escape');assert.ok(fs.existsSync(target),file+' missing '+local);
  if(ref.includes('#')&&local.endsWith('.html')){const id=ref.split('#')[1];if(id)assert.ok(fs.readFileSync(target,'utf8').includes('id="'+id+'"'),file+' missing anchor '+id);}
 }
 if(file.startsWith('Pertemuan'))for(const block of h.split(/(?=<div class="slide-container\b)/)){
  if(!/^<div class="slide-container\b/.test(block))continue;slides++;
  const options=[...block.matchAll(/data-correct="(true|false)"/g)];
  if(options.length){quizzes++;assert.equal(options.filter(m=>m[1]==='true').length,1,file+' must have one correct answer');
   const answer=block.match(/data-correct="true"[^>]*>\s*(?:<[^>]*>\s*)*([A-C])\./), explanation=block.match(/Pembahasan:\s*([A-C])/);assert.ok(answer&&explanation,file+' missing answer/explanation');assert.equal(answer[1],explanation[1],file+' answer/explanation mismatch');
  }
  const items=[...block.matchAll(/class="drag-item"[^>]*data-type="([^"]+)"/g)];
  if(items.length){practices++;const targets=[...block.matchAll(/class="drop-zone"[^>]*data-target="([^"]+)"/g)].map(m=>m[1]);for(const item of items)assert.ok(targets.includes(item[1]),file+' unmatched drag category '+item[1]);}
 }
}
for(const f of fs.readdirSync(path.join(root,'assets')).filter(f=>f.endsWith('.js')))new vm.Script(fs.readFileSync(path.join(root,'assets',f),'utf8'),{filename:f});
function cases(file,name){const h=fs.readFileSync(path.join(root,file),'utf8'),start=h.indexOf('    const '+name+' = '),end=h.indexOf('\n    // ==========================================',start);assert.ok(start>=0&&end>start);return vm.runInNewContext(h.slice(start,end)+'\nJSON.parse(JSON.stringify('+name+'))');}
let templates=0;
for(const c of Object.values(cases('Games-BPMN.html','CASE_STUDIES'))){assert.deepEqual(audit(c.solution,c.connections),[]);templates++;}
for(const c of Object.values(cases('Games-Swimlanes.html','SWIMLANES_CASES'))){assert.deepEqual(audit(c.solutionNodes,c.solutionConnections,true),[]);templates++;}
const n=[{type:'start',y:50},{type:'task',y:50},{type:'end',y:50}];
assert.ok(audit(n,[]).length,'Disconnected graph must fail');assert.ok(audit(n,[[0,1],[1,2],[2,1]]).some(e=>e.includes('End')),'End outgoing must fail');
assert.ok(audit([...n,{type:'data-store',y:50}],[[0,1],[1,2],[1,3]]).some(e=>e.includes('Association')),'Data cannot receive sequence flow');
assert.equal(10+5+5+5+5+30+25+15,100);assert.equal(20+40+15+25,100);assert.equal(15+20+20+25+20,100);
console.log(JSON.stringify({documents:documents.length,slides,inlineQuizzes:quizzes,dragExercises:practices,validReferenceDiagrams:templates,checks:'JavaScript, IDs, local links, answer/explanation consistency, category targets, and graph rejection checks passed'},null,2));
