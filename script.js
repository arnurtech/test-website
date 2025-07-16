// 1. Notifikasi saat halaman dimuat
window.onload = function () {
    alert("Selamat datang di website saya!");
};

// 2. Validasi form sebelum submit
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nama === "" || email === "") {
        alert("Harap isi nama dan email sebelum mengirim!");
        event.preventDefault(); // cegah form dikirim
    }
});

// 3. Ganti background section (contoh interaksi tombol)
function gantiWarna() {
    const section = document.getElementById("artikel");
    section.style.backgroundColor = "#e0f7fa"; // biru muda
}

// 4. Sembunyikan/tampilkan artikel
function toggleArtikel() {
    const artikel = document.querySelector("#artikel article");
    if (artikel.style.display === "none") {
        artikel.style.display = "block";
    } else {
        artikel.style.display = "none";
    }
}

// 5. Scroll halus saat klik link nav
document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});
