/* Limited teaching checks, not a complete BPMN conformance validator. */
(function (global) {
  'use strict';
  const isData = n => /^data-/.test(n.type);
  function audit(nodes, connections, swimlanes = false) {
    const errors = [];
    const pool = n => swimlanes && n.y < 150 ? 0 : 1;
    const flows = connections.map(c => Array.isArray(c)
      ? { from: c[0], to: c[1], label: c[2] || '', flowType: 'sequence' } : c);
    const incoming = nodes.map(() => []), outgoing = nodes.map(() => []);
    const starts = [], ends = [];
    nodes.forEach((n, i) => { if(n.type === 'start') starts.push(i); if(n.type === 'end') ends.push(i); });
    if (!starts.length || !ends.length || !nodes.some(n => n.type === 'task')) errors.push('Latihan ini memerlukan Start, Task, dan End.');
    for (const f of flows) {
      const a = nodes[f.from], b = nodes[f.to];
      if (!a || !b || f.from === f.to) { errors.push('Koneksi memiliki ujung tidak valid.'); continue; }
      if (f.flowType === 'association') {
        if (!(isData(a) !== isData(b)) || (isData(a) ? b.type : a.type) !== 'task') errors.push('Data Association pada latihan ini menghubungkan data dengan Task.');
        continue;
      }
      if (isData(a) || isData(b)) { errors.push('Gunakan Data Association untuk elemen data, bukan Sequence/Message Flow.'); continue; }
      if (f.flowType === 'message') {
        if (!swimlanes || pool(a) === pool(b)) errors.push('Message Flow hanya antar Pool berbeda.');
        if (a.type !== 'task' || b.type !== 'task') errors.push('Pada palet sederhana ini, hubungkan Message Flow antar Task; message event khusus belum disediakan.');
        continue;
      }
      if (f.flowType !== 'sequence') { errors.push('Jenis koneksi tidak dikenali.'); continue; }
      if (pool(a) !== pool(b)) errors.push('Sequence Flow tidak boleh menyeberangi Pool.');
      outgoing[f.from].push(f); incoming[f.to].push(f);
    }
    nodes.forEach((n, i) => {
      if (isData(n)) {
        if (!flows.some(f => f.flowType === 'association' && (f.from === i || f.to === i))) errors.push('Elemen data belum dihubungkan dengan Data Association.');
        return;
      }
      if (n.type === 'start' && incoming[i].length) errors.push('Start tidak boleh menerima Sequence Flow.');
      if (n.type === 'end' && outgoing[i].length) errors.push('End tidak boleh mengirim Sequence Flow.');
      if (n.type !== 'start' && !incoming[i].length) errors.push('Ada objek alur tanpa Sequence Flow masuk.');
      if (n.type !== 'end' && !outgoing[i].length) errors.push('Ada objek alur tanpa Sequence Flow keluar.');
      if (n.type === 'gateway-xor' && outgoing[i].length > 1 && outgoing[i].some(f => !String(f.label || '').trim())) errors.push('Cabang XOR memerlukan label kondisi yang jelas pada latihan ini.');
      if (/^gateway-/.test(n.type) && incoming[i].length < 2 && outgoing[i].length < 2) errors.push('Gateway harus membagi atau menggabungkan alur.');
    });
    function traverse(seeds, adjacency, targetKey) {
      const visited = new Set(seeds), todo = [...seeds];
      while (todo.length) for (const f of adjacency[todo.pop()]) if (!visited.has(f[targetKey])) { visited.add(f[targetKey]); todo.push(f[targetKey]); }
      return visited;
    }
    const reachable = traverse(starts, outgoing, 'to');
    const canFinish = traverse(ends, incoming, 'from');
    if (nodes.some((n,i) => !isData(n) && (!reachable.has(i) || !canFinish.has(i)))) errors.push('Semua objek alur harus terjangkau dari Start dan memiliki jalur ke End dalam Pool-nya.');
    return [...new Set(errors)];
  }
  function escapeText(s) { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  global.BpmnLabAudit = { audit, escapeText };
  if (typeof module !== 'undefined') module.exports = global.BpmnLabAudit;
})(globalThis);
