// Callback

// Synchronus Callback

// function halo(nama){
//     alert(`Halo, ${nama}`);
// }


// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }

// tampilkanPesan(halo);



//anonymous function

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`) );


// const mhs = [
//     {
//         "nama": "Muhammad Syofi Azmi",
//         "nrp": "043040023",
//         "email": "syofi@yahoo.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Hafiz Anwari",
//         "nrp": "043040024",
//         "email": "hafiz@yahoo.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Subhan Noor",
//         "nrp": "043040025",
//         "email": "subhan@yahoo.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 3
//     },
// ];

// console.log('mulai');
// mhs.forEach(m => console.log(m.nama));
// console.log('selesai');







// Asynchronus Callback

// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4){
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             }
//         } else if (xhr.status === 404){
//             error();
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa(
//     'data/mahasiswa.json', 
//     result => {
//         const mhs = JSON.parse(result);
//         mhs.forEach(m => console.log(m.nama));

//         // console.log(JSON.parse(result));
//     }, 
//     () => {
//     });
// console.log('selesai');



// pakai jQuery

$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
        
    },
    error: (e) => {
        console.log(e.responseText);
    }
});


