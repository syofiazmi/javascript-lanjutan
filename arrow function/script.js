// Function Expression

// const tampilNama = function (nama){
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('Syofi'));



// Arrow Function

// const tampilNama = (nama) => {return `Halo, ${nama}`}
// console.log(tampilNama('Azmi'))

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`; 
// }
// console.log(tampilNama('Syofi','Pagi'));



// implisit return

// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Syofi'));


// const tampilNama = () => `Hello World`;
// console.log(tampilNama());




// mencari jumlah karakter di setiap elemen dalam array

let mahasiswa = ['Syofi', 'Subhan', 'Hafiz'];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);


// ubah ke arrow function

// let jumlahHuruf = mahasiswa.map( nama => nama.length);
// console.log(jumlahHuruf);



// kalau mau mengembalikannya dalam bentuk object

let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf)
