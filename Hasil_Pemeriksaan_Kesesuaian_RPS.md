# Hasil akhir penyelarasan materi, kuis, game, dan RPS

Tanggal penyelesaian: 30 Oktober 2026.

**Seluruh paket lokal telah diperiksa, dan temuan isi serta fungsi yang teridentifikasi telah diperbaiki.** Cakupan dan urutan pembelajaran tetap mengikuti RPS. Pemeriksaan ini menyatakan hasil review dan pengujian paket yang tersedia, bukan pengesahan kurikulum institusi atau jaminan bahwa setiap kemungkinan penggunaan bebas kesalahan.

## Akses utama

- [Portal pembelajaran](./index.html).
- [Panduan tugas, proyek, rubrik, dan penilaian](./Panduan_Pembelajaran.html).
- [RPS website lengkap](./RPS_Analisa_Proses_Bisnis.html) dan [RPS Word yang diperbarui](./Rencana%20Pembelajaran%20Semester%20%28RPS%29.docx).
- [Kuis 1: P1–P6](./Kuis1.html) dan [Kuis 2: P9–P13](./Kuis2.html).
- [Contoh diagram As-Is, analisis, gap, dan To-Be](./Contoh_AsIs_ToBe.html).
- [Materi susulan Mendelow di awal P5](./Pertemuan5.html#pelengkap-mendelow).

## Materi dan asesmen yang diselaraskan

| Area | Hasil revisi |
|---|---|
| P1–P4 | Materi Mendelow dilengkapi; Data dan Artifacts dipisahkan; penamaan task dijelaskan sebagai pedoman keterbacaan; perbandingan flowchart/BPMN diluruskan. Materi pokok yang sudah diajarkan tidak memerlukan pengulangan keseluruhan. |
| P5 | Susulan Mendelow dan klarifikasi tersedia sebelum As-Is. Label pembahasan kuis keempat kini A. Transisi berikutnya menuju infrastruktur/keamanan, bukan langsung To-Be. Bukti observasi daring/luring dijelaskan sejak awal proyek. |
| P6–P7 | Kuis 1 diarahkan ke lembar asesmen. SPOF, risiko antrean, MFA, lane otorisasi, TLS, dan hasil autentikasi diluruskan; kontrol perlu diterapkan pada sistem, bukan hanya digambar. |
| P8 | Materi Mendelow yang dituntut UTS kini tersedia sebelum ujian. Studi kasus, pemodelan, dan bobot UTS tetap 30%. |
| P9–P10 | VAA, BVA, PCE berbasis waktu, dan RCA ditegaskan. Hipotesis akar masalah perlu bukti; solusi tidak menjanjikan biaya nol atau hasil permanen. |
| P11–P12 | Heuristik, task otomatis/manusia, peserta internal/eksternal, dan timer diluruskan. To-Be menyatakan asumsi, pengurangan NVA yang beralasan, dan risiko residual; tidak diwajibkan hasil error nol atau implementasi aplikasi. |
| P13 | Kuis 2 tercatat ditambahkan; ROI berperiode, biaya operasi, payback, TELOS, HMAC, backup terisolasi, dan privasi diluruskan. Contoh investasi Rp18 juta dengan manfaat Rp35 juta/tahun dan operasi Rp5 juta/tahun menghasilkan ROI tahun pertama sekitar 66,7% dan payback sederhana 7,2 bulan. |
| P14–P16 | Draf P14 → presentasi P15 → final P16. Identitas tugas, bukti observasi, format ZIP, deck 10–12 slide, waktu 10+8+2 menit, rubrik, dan kontribusi individu diseragamkan. Tidak ada ambang kemiripan XML yang otomatis menghasilkan E/0. |
| Seluruh paket | Tautan panduan bersama tersedia; sumber gambar eksternal tetap dipertahankan. Penekanan Markdown yang sebelumnya tampil sebagai tanda bintang pada slide diubah menjadi penekanan HTML. Atribusi motivasional yang belum terverifikasi diganti menjadi refleksi/parafrasa pembelajaran. |

Empat asesmen formatif tercatat masing-masing menyumbang 5% pada rincian operasional paket: Tugas 1 Value Chain (P2), Kuis 1 (P6), Tugas 2 VAA (P9), dan Kuis 2 (P13). Nilai atau ketentuan yang sudah diumumkan pada P1–P4 tetap diakui; tidak ada penalti baru yang berlaku surut. Latihan refleksi dan skor game tidak otomatis menggantikan nilai asesmen tersebut.

Rumus nilai akhir: 10% partisipasi + 20% tugas/kuis + 30% UTS + 25% laporan + 15% presentasi. Rubrik presentasi diproporsionalkan menjadi struktur/disiplin 20%, penguasaan masalah/model 40%, kelayakan/risiko 15%, serta kontribusi/respons 25%.

## Hasil per game

| Game | Koreksi dan pemeriksaan |
|---|---|
| [BPMN](./Games-BPMN.html) | Kategori Data benar; tiga kasus memiliki solusi lengkap termasuk cabang penolakan dan parallel join. Validator memeriksa arah, keterhubungan, jalur Start–End, dan label XOR. Diagram terputus tidak lagi lulus hanya karena memiliki beberapa simbol. Label cabang tetap tersimpan ketika node dihapus. |
| [Swimlanes](./Games-Swimlanes.html) | Dua contoh memiliki alur internal lengkap bagi setiap Pool; Message Flow antar Task, Data Association untuk data, dan cabang penolakan. Validator menolak Sequence Flow lintas Pool serta Message Flow dalam Pool yang sama. Sisa blok Markdown dan tautan ke nama berkas lama dihapus. |
| [Mendelow](./Games-Mendelow.html) | Regulator saat audit aktif dan serikat yang mampu menghentikan operasional dinilai berdasarkan power/interest kasus, bukan jabatan tetap. Klik ganda dan reset saat transisi dijaga. |
| [Infrastruktur](./Games-Infrastruktur.html) | Redundansi/replikasi tidak lagi menjamin tanpa kehilangan data; risiko RPO, kapasitas, dan rekonsiliasi diperjelas. Pilihan, biaya, hasil akhir, klik ganda, dan reset diuji. |
| [Security](./Games-Security.html) | HMAC dibedakan dari enkripsi dan tanda tangan digital asimetris. Kontrol audit, respons insiden, dan risiko residual diluruskan. Semua opsi skenario diuji. |
| [Lean](./Games-Lean.html) | QC menjadi BVA; retensi dokumen diberi konteks. Target kategori sesuai bank (2 VA, 3 BVA, 7 NVA). Kemenangan memakai ketepatan klasifikasi ≥80%, bukan syarat PCE yang sebelumnya mustahil dicapai. PCE 20% adalah contoh proses terpisah (6/30 menit), bukan rasio jawaban benar atau gabungan kartu yang tidak satu proses. |
| [Fishbone](./Games-Fishbone.html) | Bukti skenario diperjelas; hipotesis dan solusi tidak dianggap pasti tanpa validasi. Ketiga kasus kini dapat diselesaikan berurutan, bukan berhenti pada kasus pertama. Seluruh 25 opsi dan reset diuji. |
| [Quadrangle](./Games-Quadrangle.html) | Indikator dijelaskan sebagai skor kinerja simulasi; tinggi berarti lebih baik, bukan waktu/biaya aktual. Tuntutan microservices untuk memenuhi tenggat diganti perubahan aturan/modul sesuai kasus. Seluruh 9 opsi diuji. |
| [TELOS](./Games-TELOS.html) | Pembacaan slider ekonomi diperbaiki. Skor dan keputusan memakai aturan skenario yang sama (total Rp100 juta, minimum Rp10 juta per kegiatan). Anggaran bukan jaminan kelayakan; hasil menjelaskan bukti TELOS yang masih diperlukan. Enam kombinasi, termasuk kurang/lebih anggaran dan batas minimum, diuji. |

Hasil game dinyatakan sebagai latihan, bukan sertifikasi profesi atau nilai akademik resmi. Validator BPMN sengaja diberi batas kemampuan: lulus pemeriksaan dasar tidak berarti telah memvalidasi seluruh semantik token, seluruh standar OMG, atau kesesuaian dengan setiap narasi.

## RPS dan panduan bersama

- RPS website kini menampilkan CPL, CPMK, 16 baris pertemuan beserta Sub-CPMK/metode/waktu/evaluasi, rancangan proyek, komposisi nilai, pemetaan capaian, dan pustaka.
- RPS Word mempertahankan struktur paket dan materi sumber; kategori Data, pengayaan Mendelow, label kognitif CPMK 1, serta pengumpulan draf/final diluruskan. Bagian pelurusan operasional ditambahkan agar rincian asesmen, proyek, rubrik, dan hak klarifikasi mengikuti paket yang sama.
- Bukti proyek disesuaikan dengan objek; foto kunjungan, dokumen manual, atau stempel tidak diwajibkan pada objek yang memang tidak memilikinya.
- Untuk sesi presentasi 150 menit, panduan merencanakan enam kelompok × 20 menit dengan 30 menit pembukaan/transisi; kelompok lebih banyak memerlukan sesi penilaian tambahan yang diumumkan dan disetujui dosen/prodi.
- Panduan memberikan estimasi beban penugasan sebagai alat perencanaan; kesetaraan SKS tidak direka sebagai aturan baru institusi.

## Hasil verifikasi

- **31 dokumen HTML**: JavaScript inline berhasil diparse; ID unik; tautan dan aset lokal ditemukan.
- **774 slide pada 16 pertemuan**: navigasi keyboard/dropdown dan pembukaan pembahasan diuji di Chrome pada viewport 1440×1000. Tidak ditemukan teks terpotong pada elemen yang diperiksa.
- **60 kuis interaktif**: satu kunci per soal, huruf kunci cocok dengan pembahasan; umpan balik pilihan benar/salah diuji.
- **30 latihan seret-lepas**: setiap kategori memiliki target pada slide yang sama; penempatan ke target yang sesuai dan pemunculan umpan balik diuji melalui DOM. Ini tidak mencakup seluruh variasi perangkat sentuh.
- **12 soal pada dua lembar kuis baru**: skor konsep benar semua 60/60, salah semua 0/60; kasus 40 poin tetap dinilai dosen, tidak diberi nilai otomatis.
- **5 diagram referensi** lulus pemeriksaan dasar; contoh koneksi terputus, End dengan alur keluar, koneksi data salah, dan pelanggaran batas Pool ditolak.
- **36 kelompok pemeriksaan browser lulus**, 0 gagal: termasuk sembilan game, semua opsi skenario yang diuji, jalur tuntas, klik ganda, reset saat transisi, dan lebar dokumen baru pada viewport seluler 390 piksel.
- RPS Word dapat dibuka kembali sebagai paket ZIP/XML; 17 entri paket dan 17 baris tabel mingguan tetap ada; bagian pelurusan operasional tercatat satu kali.
- Pemeriksaan editor tidak melaporkan galat.

Pemeriksaan dapat diulang dengan [validator statis](./tools/validate-learning.cjs) dan [validator browser](./tools/validate-learning-browser.cjs). Pengujian browser memakai Chrome yang terpasang tanpa dependensi npm; gambar Unsplash diblokir selama pengujian agar tidak bergantung pada layanan gambar eksternal. Ketersediaan CDN/gambar luar, pelaksanaan LMS, pengesahan prodi, dan seluruh variasi perangkat tidak termasuk jaminan hasil ini.

## Ketentuan yang tetap mengikuti institusi

Kode portal INF1104 tidak dianggap bukti kode kurikulum yang disahkan. Identitas fakultas, gelar administratif, CPL final, otorisasi RPS, syarat presensi, tabel konversi nilai huruf, serta ketentuan sanksi mengacu pada dokumen institusi. Karena pedoman tersebut tidak tersedia di workspace, klaim angka/aturan resmi yang sebelumnya tidak berdasar dihapus atau diarahkan pada pedoman yang berlaku; pekerjaan lokal tidak ditunda untuk meminta persetujuan tambahan.

Kuis baru merupakan lembar latihan/asesmen yang bisa dicetak atau dikumpulkan melalui LMS. Halaman statis tidak mengautentikasi mahasiswa, melindungi kunci seperti server ujian, ataupun mengirim nilai ke sistem kampus. Penilaian kasus, verifikasi kontribusi, dan keputusan nilai tetap merupakan penilaian dosen.

## Sumber primer pelurusan konsep

- [OMG BPMN 2.0.2](https://www.omg.org/spec/BPMN/2.0.2): kategori elemen, task, event, dan aturan aliran.
- [NIST: HMAC](https://csrc.nist.gov/glossary/term/hmac): autentikasi pesan menggunakan fungsi hash dan kunci.
- [UU 27/2022 pada JDIH Komdigi](https://jdih.komdigi.go.id/produk_hukum/view/id/832/t/undangundang%20nomor%2027%20tahun%202022): pengantar kewajiban pemrosesan dan penanganan penghapusan data; bukan klaim bahwa enkripsi atau persetujuan tertulis merupakan satu-satunya syarat.

---

## Arsip pemeriksaan awal — sebelum revisi menyeluruh

**Bagian di bawah adalah riwayat temuan awal, bukan daftar masalah yang masih terbuka. Gunakan hasil akhir di atas untuk status paket saat ini.**

# Hasil pemeriksaan kesesuaian materi Analisa Proses Bisnis

Tanggal pemeriksaan: 30 Oktober 2026.

Pembaruan setelah pemeriksaan: materi Mendelow sudah ditambahkan pada P2 dan di awal P5 sebagai susulan untuk kelas yang telah menyelesaikan P4. Pedoman penamaan task P3, lima kategori BPMN P3, klasifikasi Data/Artifacts P4, serta label kategori data pada game BPMN dan Swimlanes sudah diluruskan. Temuan di bawah merekam keadaan saat pemeriksaan awal; temuan lain belum termasuk lingkup revisi ini.

## Kesimpulan

**Materi sudah selaras secara umum pada cakupan dan urutan topik, tetapi belum konsisten sepenuhnya pada dokumen capaian pembelajaran, instrumen evaluasi, ketentuan proyek, dan aturan penilaian.** Materi dapat dipertahankan sebagai fondasi; prioritas revisi ialah menyinkronkan RPS dan evaluasinya serta mengoreksi beberapa contoh konsep.

Seluruh pokok bahasan mingguan dalam RPS Word memiliki materi pada pertemuan yang sesuai. Hal ini tidak berarti seluruh indikator sudah terukur atau seluruh materi pengayaan sudah diajarkan sebelum diujikan.

## Acuan dan batas pemeriksaan

- Acuan kerja: [Rencana Pembelajaran Semester (RPS).docx](./Rencana%20Pembelajaran%20Semester%20%28RPS%29.docx), bagian 1–7. Dokumen ini diperlakukan sebagai acuan pembanding karena paling lengkap; status pengesahannya belum dapat dipastikan dari berkas yang tersedia.
- Pembanding: [RPS versi website](./RPS_Analisa_Proses_Bisnis.html), [portal](./index.html), dan 16 berkas pertemuan, termasuk UTS dan UAS. Terdapat 761 kontainer slide dalam 16 berkas tersebut.
- Sembilan game pendukung tersedia. Pemeriksaan game berfokus pada topik, keterkaitan dengan materi, dan contoh klasifikasi yang relevan; bukan audit menyeluruh seluruh skenario atau pengujian interaksi browser.
- Pemeriksaan dilakukan terhadap isi dokumen Word dan sumber HTML, termasuk kunci interaktif serta teks pembahasannya. Tautan HTML lokal juga diperiksa keberadaan tujuannya.
- Tidak tersedia pedoman akademik resmi, dokumen CPL prodi yang disahkan, data kelas, ataupun bank soal pada LMS. Klaim aturan resmi kampus dan pelaksanaan kuis di LMS belum dapat diverifikasi.
- Materi asli tidak diubah dalam pemeriksaan ini.

## 1. Matriks kesesuaian 16 pertemuan

| Pertemuan | Pokok bahasan RPS Word | Hasil pencocokan | Catatan |
|---|---|---|---|
| 1 | Kontrak, definisi, hubungan proses bisnis–TI, BPM lifecycle | Sesuai secara substansi | Bobot 10/20/30/40 sesuai. Observasi digital merupakan persiapan P2; jangan otomatis dihitung sebagai pengganti tugas resmi RPS. |
| 2 | Stakeholder, core/support/management, value chain Porter | Sesuai untuk materi inti | Slide belum mengajarkan matriks power–interest Mendelow, sementara portal/RPS HTML menjanjikannya dan UTS menanyakannya. |
| 3 | Pemetaan, flow objects, sequence/message flow | Sesuai | Penamaan task perlu dijelaskan sebagai pedoman pemodelan, bukan batas validitas sintaks OMG. |
| 4 | Pools, lanes, artifacts, praktik perangkat lunak | Sesuai | Pisahkan kategori Data dan Artifacts dalam penjelasan BPMN 2.0. |
| 5 | Elicitation dan model As-Is | Sesuai | Pembahasan soal ke-4 salah label; kalimat transisi langsung ke To-Be tidak sesuai urutan P6–P10. |
| 6 | Infrastruktur TI, aliran data, SLA | Sesuai, dengan pengayaan | Pengumuman Kuis 1 P1–P6 sudah ada di slide, tetapi hilang dari matriks RPS HTML. Kedalaman API, concurrency, messaging, dan DRP perlu dibatasi untuk semester 1. |
| 7 | CIA, titik rawan data, kontrol dalam proses | Sesuai, dengan koreksi konsep | BPMN mendokumentasikan kontrol; diagram/lane/message flow sendiri tidak menerapkan otorisasi atau enkripsi. |
| 8 | UTS atas materi P1–P7 | Sesuai bentuk dan cakupan utama | Bobot 30%, studi kasus, dan praktik As-Is sesuai. Mendelow harus diajarkan secara eksplisit sebelum menjadi tuntutan ujian. |
| 9 | VA/BVA/NVA dan tujuh pemborosan Lean | Sesuai | Tugas Individu 2 Analisis VAA sudah benar di slide. PCE merupakan pengayaan yang relevan. Rekap UAS salah menyebut identitas tugas. |
| 10 | RCA, fishbone, 5 Whys, bottleneck/redundancy | Sesuai | Tahap 2 proyek tercakup. Contoh solusi tidak sebaiknya menjanjikan biaya nol atau penyelesaian permanen tanpa bukti. |
| 11 | BPR/redesign dan heuristik | Sesuai | Devil's Quadrangle relevan sebagai pengayaan. Bedakan konsep redesign bertahap dan reengineering yang lebih radikal. |
| 12 | Model To-Be, gap analysis, solusi TI | Sesuai | Contoh Manual/User/Service/Script Task dan batas peserta eksternal perlu diperjelas. |
| 13 | Kelayakan kasar, SDM, kebutuhan keamanan | Sesuai, tetapi tuntutan diperluas | TELOS, TCO, ROI, payback, dan change management mendukung topik. Kuis 2 resmi dalam RPS belum ditandai sebagai asesmen tersendiri. |
| 14 | Finalisasi laporan dan asistensi | Sesuai | Lima bab merupakan pengembangan yang masuk akal dari empat bagian isi RPS; tenggat dan ketentuan penyerahan harus diseragamkan. |
| 15 | Presentasi dan defense | Sesuai | Kontribusi 15 poin persentase terhadap nilai akhir sesuai. Istilah “15% UAS” ambigu; cek kapasitas sesi presentasi. |
| 16 | Final proyek/evaluasi komprehensif | Sesuai | Bundel final sesuai pendekatan proyek, tetapi rekap tugas, skala nilai, sanksi, dan persyaratan bukti perlu disinkronkan. |

## 2. Temuan prioritas tinggi

### A. Mendelow diujikan tetapi belum diajarkan secara eksplisit dalam slide P2

**Bukti:** [materi P2](./Pertemuan2.html) membahas internal/eksternal, klasifikasi proses, dan Porter, tetapi tidak memuat pembahasan Mendelow/power–interest. [Portal](./index.html) mendeskripsikan P2 sebagai mencakup Mendelow dan kategori Connected; kategori Connected juga belum menjadi bahasan eksplisit slide. [RPS HTML](./RPS_Analisa_Proses_Bisnis.html) mencantumkan Mendelow dalam CPMK 1 dan materi P2. [UTS](./Pertemuan8-UTS.html), bagian “Instruksi Soal 1”, meminta pemetaan aktor ke matriks Mendelow beserta alasan.

[Game Mendelow](./Games-Mendelow.html) tersedia, sehingga ini bukan ketiadaan seluruh bahan pendukung. Namun, keberadaan game tidak membuktikan mahasiswa sudah menerima penjelasan, latihan terpandu, dan umpan balik sebelum ujian.

**Rekomendasi:** Tambahkan materi empat kuadran, arti power/interest, strategi pengelolaan, dan satu latihan beralasan pada P2. Cantumkan game sebagai kegiatan wajib yang jelas jika digunakan untuk persiapan ujian. Hindari menentukan kuadran hanya dari jabatan; kekuasaan dan kepentingan bergantung pada kasus.

### B. Identitas tugas dan jadwal kuis berbeda antarberkas

RPS Word menetapkan Tugas Individu 1 di P2 (Value Chain), Kuis 1 di P6 (P1–P6), Tugas Individu 2 di P9 (VAA), dan Kuis 2 di P13.

**Perbedaan yang ditemukan:**

- [RPS HTML](./RPS_Analisa_Proses_Bisnis.html) menambahkan “Tugas Analisis Kasus 1” di P1, menyebut “Tugas Individu 2” di P2, dan menaruh “Kuis Formatif 1” di P3. P6 hanya menyebut simulasi jaringan dan P13 hanya draf Bab 5.
- [Slide P6](./Pertemuan6.html) justru sudah mengumumkan Kuis 1 melalui LMS dengan cakupan P1–P6, sesuai RPS Word.
- [Slide P9](./Pertemuan9.html) sudah memuat Tugas Individu 2 Analisis VAA, sesuai RPS Word.
- [Rekap UAS](./Pertemuan16-UAS.html), bagian “Komposisi Penilaian Akhir Semester”, menyebut “Tugas 1 (Kantin) + Tugas 2 (Value Chain)”. Rekap ini melewatkan tugas VAA dan tidak mengikuti identitas tugas dalam RPS Word maupun slide P2/P9.
- [Slide P13](./Pertemuan13.html) memiliki empat soal refleksi interaktif, tetapi tidak menjelaskan pelaksanaan “Kuis 2” resmi beserta cakupan, durasi, cara pengumpulan, dan bobotnya. “Kuis 2: Metode Cut-over” adalah nomor soal kedua, bukan bukti adanya asesmen Kuis 2 RPS.

**Rekomendasi:** Jadikan empat asesmen RPS sebagai daftar utama. Bedakan latihan refleksi setiap pertemuan dari kuis tercatat pada komponen 20%. Tetapkan pembagian bobot internal yang totalnya 20 poin persentase; RPS saat ini belum merincinya. Observasi P1 dapat tetap menjadi persiapan tanpa menggeser identitas Tugas Individu 1 dan 2.

### C. Sanksi dan klaim aturan resmi tidak konsisten atau belum memiliki dasar yang tersedia

**Bukti:** [P14](./Pertemuan14.html) menetapkan kemiripan XML di atas 80% otomatis mendapat E/0; [P16](./Pertemuan16-UAS.html) menggunakan ambang di atas 75%. P14/P16 juga memuat penalti 10 poin per hari, dan P16 memuat minimum presensi 75%, jadwal sanggah, serta klaim konversi nilai resmi. Ketentuan rinci tersebut tidak terdapat dalam RPS Word yang diperiksa.

P16 menyatakan portal ditutup otomatis pukul 23.59 pada hari UAS, tetapi juga menyebut penalti per hari keterlambatan. Saluran penyerahan terlambat dan kondisi penerapan penalti tidak dijelaskan.

**Implikasi:** Aturan mahasiswa tidak memiliki satu acuan yang konsisten. Kemiripan struktur diagram juga dapat berasal dari kasus, template, atau pola BPMN yang sama; persentase kemiripan saja belum membuktikan plagiarisme.

**Rekomendasi:** Rujuk pedoman institusi yang benar-benar berlaku. Gunakan kemiripan sebagai pemicu pemeriksaan sumber, proses pengerjaan, dan klarifikasi mahasiswa sebelum keputusan nilai. Seragamkan tenggat, unit poin penalti, penerimaan terlambat, prosedur klarifikasi, dan mekanisme keberatan; umumkan sejak kontrak P1.

### D. Tabel nilai akhir tidak lengkap dan batas A berbeda

**Bukti:** [P16](./Pertemuan16-UAS.html), bagian “Rentang Konversi Nilai Akademik Resmi ITBS”, menampilkan A 80–100, B+ 75–79,99, B 70–74,99, C+ 65–69,99, dan D/E di bawah 60. Rentang **60–64,99 tidak tercantum**; D dan E tidak dipisahkan batasnya. [P13](./Pertemuan13.html), rubrik feasibility, menyebut “Grade A: 85–100”.

RPS Word hanya menyatakan konversi mengikuti standar penilaian akademik ITBS, tanpa tabel angka.

**Rekomendasi:** Gunakan satu tabel resmi yang terverifikasi dan lengkap. Jika angka 85 pada P13 merupakan tingkat unggul untuk rubrik tertentu, gunakan label “Unggul” serta jelaskan bahwa itu tingkat kinerja rubrik. Jangan menyebut tabel P16 resmi sebelum dasar akademiknya tersedia.

### E. RPS HTML belum merepresentasikan dokumen RPS secara utuh

**Bukti:** [RPS HTML](./RPS_Analisa_Proses_Bisnis.html) memiliki judul bagian CPL, tetapi isinya hanya empat CPMK yang telah ditulis ulang. Empat CPL dalam RPS Word tidak ditampilkan. Kode Sub-CPMK, metode/alokasi waktu terperinci, rancangan proyek, serta daftar pustaka juga tidak ditampilkan lengkap. CPMK 1 bergeser dari menjelaskan/mengidentifikasi menjadi menganalisis; CPMK 4 tidak lagi menyebut penyusunan laporan secara eksplisit.

Identitas pun berbeda: kode Word masih placeholder, HTML menggunakan INF1104; fakultas Word masih placeholder, HTML menyebut Fakultas Ilmu Komputer & Desain; gelar dosen berbeda; HTML menambahkan sifat Wajib dan “Otorisasi/Kaprodi: Tim Kurikulum ITBS”. Semester 1 dan tanggal penyusunan dari Word belum ditampilkan lengkap di HTML. Perbedaan ini membutuhkan verifikasi, bukan asumsi bahwa salah satu pasti benar.

**Rekomendasi:** Gunakan rumusan CPL/CPMK yang sama dengan versi yang disahkan. Jika halaman hanya ringkasan, beri label ringkasan dan tautan unduh dokumen acuan. Lengkapi identitas dan pengesahan berdasarkan dokumen institusi.

## 3. Koreksi materi dan kuis

### F. Pembahasan kuis P5 salah label

Di [P5](./Pertemuan5.html), “Kuis 4: Jebakan As-Is”, pilihan A benar dan atribut kunci interaktif juga memilih A. Namun, judul penjelasan tertulis **“Pembahasan: B”**. Isi penjelasan mendukung A.

**Koreksi:** Ubah label pembahasan menjadi A. Pemeriksaan otomatis atas kecocokan huruf kunci dan label pembahasan pada 16 berkas menemukan satu ketidakcocokan ini; pemeriksaan tersebut tidak membuktikan semua jawaban benar secara konseptual.

### G. Contoh User Task P12 sebenarnya pekerjaan manual

Di [P12](./Pertemuan12.html), game klasifikasi task memberi kategori `user` pada “Kasir memeriksa kesegaran buah fisik sebelum diserahkan”. Tidak ada interaksi aplikasi pada deskripsi tersebut, sehingga lebih tepat **Manual Task**. User Task adalah pekerjaan manusia dengan bantuan aplikasi.

**Koreksi:** Tambahkan kategori Manual Task, atau ubah contoh User Task menjadi “Kasir memeriksa hasil inspeksi dan mencatat persetujuan pada aplikasi POS”. Contoh backend menghitung pajak dapat berupa Script Task jika skrip dijalankan oleh process engine, atau Service Task jika memanggil layanan; beri konteks agar tidak bertentangan dengan penjelasan Script Task sebelumnya.

### H. Bedakan aturan BPMN, gaya penulisan, dan kontrol implementasi

- [P3](./Pertemuan3.html) menyatakan BPMN mensyaratkan task berupa kalimat aktif. Pola kata kerja + objek adalah pedoman penamaan yang baik, bukan aturan sintaks OMG yang otomatis membuat model tidak sah jika dilanggar.
- [P4](./Pertemuan4.html) dan [game Swimlanes](./Games-Swimlanes.html) perlu membedakan kategori **Data** (Data Object/Data Store) dari **Artifacts** (Group/Text Annotation), sesuai pengelompokan BPMN 2.0. RPS Word sendiri juga menggunakan pengelompokan lama/sederhana, sehingga koreksi perlu serentak.
- [P7](./Pertemuan7.html) menyebut lane otorisasi dan Message Flow yang dilindungi HTTPS. Lane/message flow hanya menggambarkan pembagian tanggung jawab dan pertukaran pesan; otorisasi/TLS harus menjadi kebutuhan kontrol yang diterapkan sistem. Label “Database Terenkripsi” juga mendokumentasikan persyaratan, bukan mengaktifkan enkripsi.
- Contoh Boundary Error Event untuk tiga kali gagal login pada [P7](./Pertemuan7.html) membutuhkan kondisi error yang didefinisikan dan dilempar oleh aktivitas. Untuk pengantar, hasil autentikasi, pencatatan percobaan, dan XOR menuju penguncian akun lebih mudah dipahami.
- Contoh Boundary Timer Event pada [P12](./Pertemuan12.html) perlu menunjukkan aktivitas menunggu pembayaran yang benar-benar aktif selama periode timeout. Jelaskan marker interrupting apabila timeout membatalkan aktivitas tersebut.
- Contoh “Payment Gateway Engine” sebagai lane pada [P12](./Pertemuan12.html) harus diberi batas: sistem internal dapat dimodelkan sebagai lane sesuai sudut pandang model; penyedia pembayaran eksternal sebagai peserta mandiri lebih tepat pool terpisah dan Message Flow.

**Rekomendasi:** Sediakan satu contoh diagram As-Is/To-Be yang lengkap beserta legenda, batas peserta, aturan aliran, data, dan anotasi kontrol. Diagram tersebut menjadi rujukan bersama untuk praktik serta rubrik.

### I. Hindari tuntutan hasil To-Be yang absolut

[P12](./Pertemuan12.html) menampilkan target error 0% karena auto-validation; [P14](./Pertemuan14.html) meminta seluruh task NVA lenyap; beberapa contoh menganggap otomasi menghilangkan bottleneck sepenuhnya. Pada [P10](./Pertemuan10.html), contoh antrean pesan/SOP menjanjikan biaya Rp0 dan solusi permanen.

**Rekomendasi:** Gunakan target yang disertai asumsi, data dasar, periode pengukuran, biaya implementasi/operasional, serta risiko residual. To-Be merupakan usulan sehingga efisiensinya perlu diberi label estimasi/simulasi sampai teruji. Aktivitas kontrol yang wajib dipertahankan perlu dibedakan dari pemborosan yang dapat dihilangkan.

Rumus PCE yang disajikan sudah tepat: waktu VA dibagi waktu siklus total. Namun, penjelasan [P9](./Pertemuan9.html) bahwa sisa 90% seluruhnya menunggu/pemborosan perlu diluruskan: waktu non-VA juga dapat mencakup BVA yang masih diperlukan. Rumus ROI di [P13](./Pertemuan13.html) perlu menyatakan periode dan memasukkan biaya operasional agar penghematan kotor tidak dianggap arus kas bersih.

## 4. Proyek, bobot, dan beban pembelajaran

### Yang sudah konsisten

- Bobot total pada RPS Word dan komposisi utama materi sama: partisipasi 10%, tugas/kuis 20%, UTS 30%, proyek akhir 40%.
- Proyek akhir 40% terbagi menjadi laporan 25% dan presentasi 15% terhadap **nilai akhir semester**. Pembagian ini benar dan tidak perlu diubah.
- Tim 3–4 mahasiswa, objek UMKM/layanan kampus, As-Is, analisis VAA/RCA, To-Be, serta presentasi mengikuti rancangan proyek RPS.
- Lima bab pada materi akhir tetap memuat empat bagian isi utama RPS Word. Bab evaluasi/feasibility merupakan perluasan yang relevan, bukan ketidaksesuaian dengan sendirinya.
- Rubrik laporan pada P14/P16 berjumlah 100%; rubrik presentasi P15 juga berjumlah 100% dalam komponen masing-masing.
- Referensi Dumas dan Silver diperkenalkan di P1 dan cocok dengan pustaka utama RPS Word.

### Yang perlu dirapikan

1. **Istilah bobot.** [P15](./Pertemuan15.html) menulis “15% UAS”. Ganti menjadi “15% nilai akhir; bagian dari komponen proyek/UAS 40%”. Jika dinormalisasi di dalam komponen UAS, laporan setara 62,5% dan presentasi 37,5% dari skor UAS. Rumus nilai akhir yang tidak ambigu: `NA = 0,10 × Partisipasi + 0,20 × TugasKuis + 0,30 × UTS + 0,25 × Laporan + 0,15 × Presentasi`, dengan semua skor komponen berskala 0–100.
2. **Tenggat proyek.** RPS Word menyebut pengumpulan laporan di P14, presentasi P15, final proyek P16. P14 menyebut final revisi H-1 P15, sedangkan P15/P16 masih menerima revisi pascapresentasi. Tetapkan tahap yang jelas: P14 draf lengkap untuk asistensi, H-1 P15 berkas presentasi dan laporan siap uji, P16 final setelah revisi. Selaraskan redaksi RPS jika skema ini dipakai.
3. **Bukti observasi.** P1 mengizinkan studi digital, sedangkan [P16](./Pertemuan16-UAS.html) menuntut foto kunjungan, bukti dokumen manual, dan surat/stempel mitra. Objek yang sejak awal digital tidak selalu memiliki dokumen manual atau stempel. Umumkan bukti yang diterima sejak P1/P5, termasuk alternatif wawancara daring, catatan observasi, tangkapan layar berizin, dan konfirmasi narasumber yang sesuai objek.
4. **Kapasitas P15.** RPS menyediakan 150 menit; [P15](./Pertemuan15.html) mengalokasikan 20 menit per kelompok sekaligus memiliki 50 kontainer slide. Secara teoritis hanya tujuh kelompok muat dalam 140 menit tanpa kuliah panjang, transisi, atau jeda. Untuk lebih dari tujuh kelompok, perlu penjadwalan lintas sesi atau penyesuaian durasi. Jumlah kelompok sebenarnya belum tersedia.
5. **Perbedaan rincian waktu.** P14 menyebut 10 menit presentasi + 10 menit tanya jawab; P15 memerinci 10 + 8 + 2 menit umpan balik. Total sama, tetapi rincian sebaiknya diseragamkan.
6. **Tingkat semester 1.** API, webhook signature, concurrency, RPO/RTO, TCO/ROI, dan immutable audit trail relevan sebagai konteks, tetapi bukan prasyarat keterampilan teknis yang tercantum dalam RPS. Bedakan kompetensi wajib (mengidentifikasi, memodelkan, menganalisis sederhana) dari pengayaan teknis; jangan menuntut implementasi aplikasi/prototipe tanpa pembelajaran dan alokasi kerja yang jelas.
7. **Beban dan keterukuran.** RPS Word memuat waktu sesi 3×50 menit, tetapi belum merinci beban penugasan terstruktur dan belajar mandiri. Tambahkan estimasi pengerjaan proyek sesuai ketentuan SKS institusi yang berlaku. Rubrik finansial presentasi 25% perlu dipastikan tetap proporsional terhadap kompetensi inti pemodelan dan analisis proses.
8. **Transisi materi.** [P5](./Pertemuan5.html) menyebut To-Be pada “Pertemuan Berikutnya”, padahal P6/P7 membahas infrastruktur/keamanan dan desain ulang utama dimulai P11. Ubah pengantar menjadi jembatan menuju identifikasi ketergantungan TI dan risiko proses As-Is.

## 5. Penguatan keterlacakan capaian

RPS Word memuat CPL dan CPMK, tetapi belum menyediakan matriks eksplisit hubungan CPL–CPMK–Sub-CPMK–instrumen–indikator. Berikut rancangan pemetaan untuk divalidasi dosen/prodi, bukan penetapan kurikulum baru:

| CPMK | Pertemuan pembelajaran utama | Bukti asesmen yang disarankan | Indikator yang perlu ditulis pada rubrik |
|---|---|---|---|
| 1: Konsep, stakeholder, value chain | P1–P2 | Tugas Individu 1, bagian Kuis 1, bagian UTS | Aktor dan perannya tepat; klasifikasi proses dan pemetaan value chain beralasan. |
| 2: Pemodelan As-Is dan To-Be | P3–P5, P12 | Praktik P4/P5, UTS, Bab 2 dan Bab 4 | Alur lengkap, pool/lane dan flow sesuai, kondisi gateway jelas, diagram mencerminkan narasi. |
| 3: Efisiensi, titik kritis, infrastruktur, keamanan | P6–P7, P9–P10 | Kuis 1, UTS, Tugas Individu 2, Bab 3 | Identifikasi SPOF/CIA benar; VA/BVA/NVA beralasan; akar masalah ditopang bukti. |
| 4: Laporan dan usulan perbaikan terintegrasi TI | P11–P15 | Kuis 2, progres proyek, laporan akhir, defense | Hubungan masalah–solusi terlacak; kelayakan realistis; kontrol relevan; argumentasi dan kontribusi individu terukur. |

CPMK-1 pada Word diberi label C3 tetapi kata kerja utamanya “menjelaskan/mengidentifikasi”. Tinjau agar kata kerja dan tingkat kognitif konsisten: gunakan tingkat sesuai target konsep, atau rumuskan penerapan nyata jika C3 memang dituju. CPL dan pengesahannya perlu mengikuti rumusan prodi yang berlaku.

## 6. Temuan teknis pendukung

Pemeriksaan tautan HTML lokal menemukan satu target yang tidak tersedia: [game Swimlanes](./Games-Swimlanes.html) memiliki tautan menuju nama lama `bpmn_swimlanes_game.html` setelah dokumen HTML utama, di dalam sisa blok Markdown. Hapus sisa instruksi tersebut atau sesuaikan tautan ke berkas game yang benar. Ini merupakan temuan statis; tampilan dan perilaku browser belum diuji dalam pemeriksaan ini.

## 7. Urutan revisi yang disarankan

1. Tetapkan versi RPS acuan dan verifikasi identitas mata kuliah, CPL, pengesahan, serta pedoman penilaian kampus.
2. Sinkronkan empat asesmen formatif, tambahkan pembelajaran Mendelow sebelum UTS, dan koreksi pembahasan kuis P5.
3. Lengkapi tabel konversi nilai; seragamkan sanksi, tenggat, hak klarifikasi, dan istilah bobot.
4. Koreksi contoh task dan penjelasan semantik BPMN; pisahkan aturan notasi dari rekomendasi gaya dan kontrol sistem.
5. Tetapkan satu panduan proyek sejak awal: struktur laporan, bukti observasi, tahap pengumpulan, kontribusi individu, dan rubrik yang proporsional.
6. Lengkapi keterlacakan CPL/CPMK serta pembagian beban belajar; sesuaikan sesi presentasi dengan jumlah kelompok.

**Status akhir pemeriksaan:** cakupan dan urutan materi dapat dipertahankan. Sinkronisasi asesmen dan aturan nilai perlu didahulukan sebelum paket dipakai sebagai pedoman final mahasiswa.
