// Get DOM
const text = document.getElementById("text");
const inputWords = document.getElementById("input-words");
const inputTyping = document.getElementById("input-typing");
const resultWPM = document.getElementById("result");
const resultTime = document.getElementById("time");
const resultWords = document.getElementById("word");
// Random Words
const rawWords =
  "tentang|di|atas|tambahkan|setelah|lagi|udara|semua|hampir|sepanjang|juga|selalu|amerika|dan|hewan|yang|lain|jawaban|sekitar|sebagai|bertanya|di|jauh|kembali|menjadi|karena|telah|sebelum|mulai|menjadi|bawah|antara|besar|buku|keduanya|anak|laki|tetapi|oleh|panggilan|datang|bisa|mobil|membawa|berubah|anak-anak|kota|tutup|datang|bisakah|negara|memotong|hari|melakukan|berbeda|melakukan|melakukan|tidak|tidak|menghancurkan|setiap|bumi|makan|mengakhiri|cukup|bahkan|setiap|contoh|mata|wajah|keluarga|jauh|ayah|kaki|beberapa|temukan|pertama|ikuti|makanan|untuk|bentuk|ditemukan|empat|dari|dapatkan|gadis|berikan|pergi|bagus|mendapat|hebat|grup|tumbuh|memiliki|tangan|keras|memiliki|memiliki|dia| kepala|dengar|bantu|dia|sini|tinggi|dia|dia|rumah|rumah|bagaimana|ide|jika|penting|di|India|ke|adalah|itu|itu|itu|hanya|simpan|jenis|tahu| tanah|besar|terakhir|nanti|belajar|pergi|kiri|biarkan|huruf|hidup|cahaya|suka|garis|daftar|sedikit|hidup|panjang|lihat|dibuat|buat|manusia|banyak|boleh|saya|berarti|laki|mungkin|mil|melewatkan|lebih|sebagian|besar|ibu|gunung|bergerak|banyak|harus|saya|nama|dekat|perlu|tidak|pernah|baru|berikutnya|malam|tidak|tidak|sekarang|jumlah|dari|mati|sering|minyak|lama|pada|sekali|satu|hanya|buka|atau|lainnya|kita|keluar|lebih|milik|halaman|kertas|bagian|orang|gambar|tempat|tanaman|bermain|titik|letakkan|pertanyaan|cepat|cepat|cukup|membaca|benar-benar|kanan|sungai|lari|berkata|sama|melihat|mengatakan|sekolah|laut|kedua|tampak|kalimat|setengah|dia|harus|menunjukkan|sisi|kecil|jadi|beberapa|sesuatu|kadang|lagu|segera|suara|mantra|mulai|negarakan|masih|berhenti|cerita|belajar|seperti|ambil|bicara|ceritakan|daripada|itu|yang|mereka|mereka|lalu|sana|ini|mereka|sesuatu|berpikir|ini|itu|berpikir|tiga|melalui|waktu|ke|bersama|juga|mengambil|pohon|coba|belok|dua|bawah|sampai|naik|kita|gunakan|sangat|berjalan|ingin|adalah|menonton|air|cara|kita|baik|pergi|adalah|apa|kapan|di mana|yang|sementara|putih|siapa|mengapa|akan|dengan|tanpa|kata|pekerjaan|dunia|akan|menulis|tahun|kamu|muda|kamu|kepada|kepala|desa|surat|lamaran|pekerjaan|pemerintah|presiden|bangunan|";

const words = rawWords.split("|");

// Initiation
let time = 0;
let arrayIndex = 0;

// Main Program
function typingHandler(arrParam, funcParam) {
  const interval = setInterval(() => {
    time += 100;
    console.log(time / 1000);
    if (arrayIndex === arrParam.length) {
      const totalTime = time / 1000;
      const cal = (60 / totalTime) * arrParam.length;
      const length = arrParam.length;
      resultWPM.innerText = `${Math.floor(cal)}`;
      resultTime.innerText = `${totalTime}`;
      resultWords.innerHTML = `${length}`;
      document.querySelector(".container-result").style.display = "block";
      time = 0;
      arrayIndex = 0;
      clearInterval(interval);
      document.querySelector(".alert").style.top = "5px";
    }
  }, 100);

  // When Spacebar Is Pressed
  inputTyping.addEventListener("keydown", (e) => {
    if (e.key === " ") {
      if (inputTyping.value === arrParam[arrayIndex]) {
        e.preventDefault();
        arrayIndex++;
        inputTyping.value = "";
      } else {
        console.log("kata salah");
      }
    }
  });
}

// Start
function getStart() {
  const containerDisplay = document.querySelector(".container-input-words");
  text.textContent = inputWords.value;
  const arrInput = inputWords.value.split(" ");
  containerDisplay.style.display = "none";
  document.getElementById("input-typing").focus();
  typingHandler(arrInput);
}

// Press Start Button Or Enter
inputWords.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    return getStart();
  }
});

// Repeat
function getRepeat() {
  time = 0;
  arrayIndex = 0;
  inputTyping.value = "";
  text.textContent = inputWords.value;
  const arrInput = inputWords.value.split(" ");
  document.getElementById("input-typing").focus();
  typingHandler(arrInput);
}
