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

// let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf)




// Konsep this pada Arrow Function

// kita coba bikin object

// pakai Constructor Function

// const Mahasiswa = function(){
//     this.nama = 'Syofi';
//     this.umur = 33;
//     this.sayHello = function(){
//         console.log(`Halo nama saya ${this.nama}, saya ${this.umur} tahun.`);
//     }
// }

// const syofi = new Mahasiswa();



// ganti jadi Arrow Function

// const Mahasiswa = function(){
//     this.nama = 'Syofi';
//     this.umur = 33;
//     this.sayHello = () => {
//         console.log(`Halo nama saya ${this.nama}, saya ${this.umur} tahun.`);
//     }
// }

// const syofi = new Mahasiswa();




// pakai Object Literal

// const mhs1 = {
//     nama: 'Syofi',
//     umur: 26,
//     sayHello: () => {
//         // console.log(`Halo nama saya ${this.nama}, saya ${this.umur} tahun.`);
//         console.log(this);
//     }
// } 









// Constructor Function

// const Mahasiswa = function(){
//     this.nama = 'Syofi';
//     this.umur = 33;
//     this.sayHello = function(){
//         console.log(`Halo nama saya ${this.nama}, saya ${this.umur} tahun.`);
//     }

//     setInterval( () => {
//         console.log(this.umur++);
//     }, 500);
// }

// const syofi = new Mahasiswa();






const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }
    
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    },600);
})














