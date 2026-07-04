# Product Requirements Document (PRD)
## Website Portofolio Pribadi — Next.js

**Versi:** 1.0
**Tanggal:** 2 Juli 2026
**Pemilik Produk:** Farhan Hanif Rahmansyah

---

## 1. Latar Belakang & Tujuan

Website ini dibuat sebagai portofolio pribadi untuk menampilkan profil, proyek, dan kemampuan teknis. Situs bersifat statis (konten tidak sering berubah), sehingga tidak memerlukan database maupun panel admin — semua konten dikelola langsung melalui kode (hardcoded) atau file konfigurasi terpisah (JSON/TS) agar mudah diedit tanpa harus mengubah struktur komponen.

Proyek ini juga menjadi sarana belajar Next.js sebagai pelengkap latar belakang Hanif di Laravel, sekaligus menghasilkan output yang bisa dipakai untuk melamar kerja/magang atau ditautkan di CV dan LinkedIn.

**Tujuan Utama:**
- Menampilkan identitas profesional secara ringkas dan menarik
- Menyajikan daftar proyek (SIMAGGOT, EcoScale, Ngudia Wilujeng) dengan deskripsi dan tautan
- Menampilkan pengalaman kerja, organisasi, dan penghargaan sebagai kredibilitas tambahan
- Memungkinkan pengunjung menghubungi pemilik lewat contact form
- Performa cepat, SEO-friendly, dan mobile-friendly

---

## 2. Target Pengguna

| Pengguna | Kebutuhan |
|---|---|
| Recruiter / HR | Cepat menilai skill & proyek, akses CV |
| Sesama developer / dosen | Melihat detail teknis proyek |
| Calon klien (freelance) | Melihat portofolio & cara menghubungi |

---

## 3. Ruang Lingkup (Scope)

### Termasuk (In Scope)
- Landing page single-page atau multi-section (Home, Work/Projects, Experience, Skills, Contact)
- Contact form terhubung ke email
- Animasi/interaksi menggunakan Framer Motion
- Deploy ke Vercel dengan custom domain (opsional)

### Tidak Termasuk (Out of Scope)
- Database & backend admin panel
- Sistem login/autentikasi
- Blog/CMS dinamis (bisa jadi fase 2 di masa depan)

---

## 4. Struktur Halaman & Konten

| Section | Konten |
|---|---|
| **Hero/Home** | Nama "Farhan Hanif Rahmansyah", headline singkat (mis. "Electrical Engineering Student — IT Concentration \| Software & IoT Developer"), lokasi (Salatiga, Central Java), CTA ke Projects/Contact |
| **About** | Professional summary: mahasiswa Teknik Elektro Undip konsentrasi Teknologi Informasi, berpengalaman di software development, IoT systems, dan database management. Info pendidikan: Universitas Diponegoro, Agu 2022 – Jul 2026 (perkiraan lulus), GPA 3.82/4.00 |
| **Experience** | Timeline pengalaman kerja & organisasi: Software Engineering Lab Assistant (Undip, Feb 2026–sekarang), Database Systems Lab Assistant (Undip, Agu–Des 2025), General Software Engineer Intern (Formulatrix Indonesia, Jan–Mar 2025); Organisasi: Ketua BKTI (Jun 2025–Apr 2026), Kepala Divisi Dokumentasi HME Undip, Kepala Divisi Komunikasi MAHADISA (Best Division Award 2024/2025), Staff Forum Studi Teknik Undip |
| **Skills** | Technical skills (Software Engineering, IoT Systems, Embedded Systems, Computer Networking, Linux Administration, Database Management), Tools & Bahasa Pemrograman (PHP, Python, C/C++, SQL, Laravel, MySQL, MQTT, Git, Figma, UML), Sertifikasi (Red Hat System Administration I, Cisco Industrial Networking Essentials, Cisco Python/C Essentials, Laravel Framework & PHP, MySQL Database Fundamentals) — ditampilkan dalam grid/badge dengan animasi |
| **Projects** | Ditampilkan dalam **bento grid** (lihat Section 4.1) — 1 proyek unggulan **SIMAGGOT** (Smart Vertical Biopond IoT System) tampil besar dengan mockup/screenshot, judul, dan deskripsi; proyek lain **EcoScale** (IoT Waste Monitoring System) dan **Ngudia Wilujeng** (Waste Bank Management System) tampil lebih kecil dengan mockup + judul saja |
| **Honors (opsional, bisa digabung ke About)** | Mentor Research Champion Academy (2024 & 2025), 3rd Winner Diponegoro Science Competition (2023), 3rd Champion KTI Forum Studi Teknik (2023), Honorable Mention LKTIN Udayana Education Festival (2023) |
| **Contact** | Form (nama, email, pesan) + link sosial (LinkedIn: farhanhanifrahmansyah, email: farhanhanifr4@gmail.com, GitHub) |
| **Footer** | Copyright, link sosial ulang |

### 4.1 Arah Desain: Bento Grid (Light Mode)

Section Projects memakai **bento grid asimetris** (terinspirasi dari referensi desain modern), diadaptasi ke **light mode** — bukan grid kartu seragam dengan icon.

**Prinsip layout:**
- **1 proyek unggulan (featured): SIMAGGOT** — mengisi tile besar (2 baris), menampilkan mockup/screenshot produk asli, judul, dan deskripsi singkat. Dipilih karena paling substansial (ESP32 IoT data acquisition + dashboard Laravel/MySQL untuk monitoring realtime, visualisasi data, logbook digital, dan manajemen siklus budidaya).
- **Proyek lain** — tile lebih kecil, cukup mockup/screenshot + judul, tanpa deskripsi panjang. Klik untuk buka detail/demo.
  - **EcoScale** — sistem monitoring sampah berbasis ESP32 + MQTT + sensor load-cell, dengan dashboard Laravel untuk visualisasi data.
  - **Ngudia Wilujeng** — platform bank sampah berbasis Laravel untuk pelacakan inventaris dan manajemen transaksi keuangan.
- Yang jadi daya tarik utama adalah **screenshot/mockup produk asli** (device frame browser/phone), bukan ikon generik.
- Navbar atas minimal: nama di kiri, menu (Work/About/Skills) di tengah/kanan, tombol "Contact me" sebagai CTA menonjol.
- Nuansa **light mode**: latar putih/abu sangat muda, kartu dengan border tipis atau shadow halus (bukan dark card seperti referensi awal), aksen warna solid (tanpa gradient) untuk CTA/badge.
- Animasi hover ringan (scale halus, sesuai preferensi Framer Motion) saat mockup di-hover.

**Yang perlu disiapkan:**
1. Screenshot asli tiap proyek, dibungkus device frame (browser frame untuk web, phone frame untuk mobile/IoT dashboard) — bisa pakai tools seperti Screely/Shots.so, atau komponen frame custom
2. Pilih 1 proyek jadi featured (grid besar), sisanya jadi tile kecil
3. Layout dibangun dengan CSS Grid biasa: `grid-template-columns` + `grid-row: span 2` untuk tile besar — tidak butuh library grid khusus

---

## 5. Tech Stack

| Layer | Pilihan | Alasan |
|---|---|---|
| Framework | **Next.js 14+ (App Router)** | Sesuai request, SSG cocok untuk konten statis |
| Styling | **Tailwind CSS** | Familiar dari pengalaman Laravel + Tailwind sebelumnya |
| Animasi | **Framer Motion** | Sesuai request untuk interaksi halus |
| Hosting | **Vercel** | Native untuk Next.js, auto CI/CD dari GitHub |
| Konten | **File config lokal** (`data/projects.ts`, `data/skills.ts`, `data/experience.ts`) | Tanpa database, mudah diedit, type-safe dengan TypeScript |
| Contact Form (tanpa DB) | Lihat opsi di bagian 6 | Perlu layanan pihak ketiga karena tidak ada backend/database |
| Icon | `lucide-react` atau `react-icons` | Ringan dan mudah dipakai di Next.js |
| Font | `next/font` (Google Fonts: Inter/Plus Jakarta Sans) | Konsisten dengan preferensi desain Hanif sebelumnya (SiMaggot) |

---

## 6. Opsi "Database" untuk Contact Form (Tanpa Database Sungguhan)

Karena kamu memilih **tanpa database**, contact form tetap butuh cara mengirim pesan ke email. Berikut opsi yang tidak memerlukan setup database:

| Opsi | Cara Kerja | Kelebihan | Kekurangan |
|---|---|---|---|
| **Resend + React Email** (rekomendasi) | API route Next.js kirim email via Resend | Gratis untuk volume kecil, kontrol penuh, bisa custom template | Perlu domain untuk sender terverifikasi (bisa pakai domain gratis dari Resend juga) |
| **EmailJS** | Kirim email langsung dari client-side (JS) | Tidak perlu backend/API route sama sekali | Kurang aman (API key terekspos di client), limit gratis kecil |
| **Formspree / Getform** | Form action mengarah ke endpoint pihak ketiga | Setup sangat cepat, tanpa kode backend | Kurang fleksibel untuk kustomisasi |
| **Vercel + Nodemailer (Gmail SMTP)** | API route kirim via SMTP Gmail | Gratis, tidak perlu layanan ketiga | Setup App Password Gmail agak ribet, rawan masuk spam |

> **Rekomendasi:** Resend, karena terintegrasi baik dengan Next.js App Router (API Route Handler), gratis untuk kebutuhan portofolio pribadi, dan hasil email terlihat profesional.

*(Catatan: jika suatu saat kamu butuh menyimpan pesan masuk atau menambah blog, opsi database ringan seperti Vercel Postgres, Supabase, atau Turso bisa ditambahkan di fase berikutnya tanpa mengubah arsitektur utama.)*

---

## 7. Kebutuhan Non-Fungsional

- **Performa:** Skor Lighthouse ≥ 90 di semua kategori (Performance, Accessibility, SEO, Best Practices)
- **Responsif:** Mobile-first, teruji di breakpoint mobile/tablet/desktop
- **SEO:** Meta tags dinamis via `next/metadata`, Open Graph image, sitemap.xml
- **Aksesibilitas:** Kontras warna cukup, alt text pada gambar, navigasi keyboard
- **Deployment:** CI/CD otomatis dari GitHub ke Vercel setiap push ke branch `main`

---

## 8. User Flow Singkat

1. Pengunjung membuka situs → landing di Hero section dengan animasi masuk
2. Scroll/klik ke About → ringkasan profesional & pendidikan
3. Scroll/klik ke Projects (bento grid) → lihat SIMAGGOT (featured), EcoScale, Ngudia Wilujeng, klik untuk buka demo/GitHub
4. Scroll/klik ke Experience → timeline pengalaman kerja & organisasi
5. Scroll/klik ke Skills → technical skills, tools, dan sertifikasi
6. Ke Contact → isi form → submit → dapat konfirmasi terkirim (toast/alert)
7. (Opsional) Klik link sosial di footer

---

## 9. Milestone / Rencana Pengerjaan

| Fase | Deliverable |
|---|---|
| 1. Setup | Inisialisasi Next.js + Tailwind + struktur folder + deploy awal ke Vercel |
| 2. Konten Statis | Isi data project & skill di file config, buat komponen dasar tiap section |
| 3. Styling & Animasi | Terapkan desain final + Framer Motion |
| 4. Contact Form | Integrasi Resend/API route + validasi form |
| 5. Optimasi | SEO, performa, aksesibilitas, testing responsif |
| 6. Launch | Custom domain (opsional) + review akhir |

---

## 10. Metrik Keberhasilan

- Lighthouse Performance score ≥ 90
- Contact form berhasil mengirim email tanpa error
- Situs dapat diakses dan tampil benar di mobile & desktop
- Waktu load awal (LCP) < 2.5 detik

---

## 11. Risiko & Mitigasi

| Risiko | Mitigasi |
|---|---|
| Email masuk spam folder | Gunakan Resend dengan domain terverifikasi, hindari Gmail SMTP untuk produksi |
| Konten jadi susah di-maintain jika project bertambah banyak | Struktur data di file terpisah (`projects.ts`) sejak awal, bukan hardcode di JSX |
| Animasi Framer Motion memperberat performa | Gunakan animasi ringan, lazy load komponen berat, hindari animasi berlebihan |

---

*Dokumen ini bisa diperbarui seiring perkembangan proyek, misalnya jika nanti ingin menambah blog atau dashboard admin di fase selanjutnya.*
