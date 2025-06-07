document.addEventListener('DOMContentLoaded', () => {
    // Dapatkan referensi elemen-elemen HTML berdasarkan ID
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const popupNav = document.getElementById('popupNav');
    const artikelKesehatanLink = document.getElementById('artikelKesehatanLink');
    const konsultasiLink = document.getElementById('konsultasiLink');
    const tentangLink = document.getElementById('tentangLink');
    const perawatLink = document.getElementById('perawatLink');
    const berandaLink = document.getElementById('berandaLink');

    const heroSection = document.getElementById('heroSection');
    const articlesSection = document.getElementById('articlesSection');
    const nursesSection = document.getElementById('nursesSection');
    const aboutSection = document.getElementById('aboutSection');

    // --- Fungsi untuk Mengelola Tampilan Konten ---
    function showContent(sectionToShow) {
        // Sembunyikan semua bagian konten terlebih dahulu
        heroSection.style.display = 'none';
        articlesSection.style.display = 'none';
        nursesSection.style.display = 'none';
        aboutSection.style.display = 'none';

        // Hapus kelas 'active' dari semua bagian konten
        heroSection.classList.remove('active');
        articlesSection.classList.remove('active');
        nursesSection.classList.remove('active');
        aboutSection.classList.remove('active');

        // Sembunyikan pop-up menu dan ubah ikon hamburger
        hamburgerMenu.classList.remove('open');
        popupNav.classList.remove('active');
        // Hapus event listener untuk menutup pop-up saat klik di luar
        document.removeEventListener('click', closePopupOutside);


        // Tampilkan bagian konten yang diminta
        if (sectionToShow === 'hero') {
            heroSection.style.display = 'flex';
            heroSection.classList.add('active');
        } else if (sectionToShow === 'articles') {
            articlesSection.style.display = 'block';
            articlesSection.classList.add('active');
        } else if (sectionToShow === 'nurses') {
            nursesSection.style.display = 'block';
            nursesSection.classList.add('active');
        } else if (sectionToShow === 'about') {
            aboutSection.style.display = 'block';
            aboutSection.classList.add('active');
        }
    }

    // --- Inisialisasi: Tampilkan Hero Section saat halaman dimuat ---
    showContent('hero');


    // --- Event Listener untuk Hamburger Menu ---
    if (hamburgerMenu && popupNav) {
        hamburgerMenu.addEventListener('click', (event) => {
            event.stopPropagation(); // Mencegah klik menyebar ke dokumen
            hamburgerMenu.classList.toggle('open');
            popupNav.classList.toggle('active');

            // Jika pop-up aktif, tambahkan event listener untuk menutup saat klik di luar
            if (popupNav.classList.contains('active')) {
                document.addEventListener('click', closePopupOutside);
            } else {
                document.removeEventListener('click', closePopupOutside);
            }
        });
    }

    // --- Event Listener untuk Link ARTIKEL KESEHATAN ---
    if (artikelKesehatanLink) {
        artikelKesehatanLink.addEventListener('click', (event) => {
            event.preventDefault();
            showContent('articles');
        });
    }

    // --- Event Listener untuk Link KONSULTASI ---
    if (konsultasiLink) {
        konsultasiLink.addEventListener('click', (event) => {
            event.preventDefault();
            window.open('https://wa.me/62881023125653', '_blank'); // Buka link WhatsApp di tab baru
        });
    }

    // --- Event Listener untuk Link TENTANG ---
    if (tentangLink) {
        tentangLink.addEventListener('click', (event) => {
            event.preventDefault();
            showContent('about'); // Panggil fungsi untuk menampilkan bagian tentang
        });
    }

    // --- Event Listener untuk Link PERAWAT ---
    if (perawatLink) {
        perawatLink.addEventListener('click', (event) => {
            event.preventDefault();
            showContent('nurses');
        });
    }

    // --- Event Listener untuk Link BERANDA ---
    if (berandaLink) {
        berandaLink.addEventListener('click', (event) => {
            event.preventDefault();
            showContent('hero');
        });
    }


    // --- Fungsi untuk Menutup Pop-up saat Klik di Luar ---
    function closePopupOutside(event) {
        if (!popupNav.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            hamburgerMenu.classList.remove('open');
            popupNav.classList.remove('active');
            document.removeEventListener('click', closePopupOutside);
        }
    }
});