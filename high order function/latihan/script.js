// Isi Total Durasi

// ambil semua elemen video
const myVideos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = myVideos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing2 video
    .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        // 11:18 -> [10, 30] split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

// jumlahkan semua detik
    .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`;



// Isi Jumlah Video
const jmlVideo = myVideos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJumlahVideo = document.querySelector('.jumlah-video');
pJumlahVideo.textContent = `${jmlVideo} video.`;



/**
 .map(item => item.dataset.duration)

 kita bisa mengambil data dari atribut html dengan .dataset , kemudian . namanya (di html data-duration)

 video.textContent.includes('JAVASCRIPT LANJUTAN')

 untuk mendapatan isi konten dari elemen html yang isinya sesuatu, pakai .includes( isinya )

 */