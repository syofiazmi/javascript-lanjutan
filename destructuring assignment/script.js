// Destructuring Variabel or Distructuring Assignment


// Destructuring Array

// const perkenalan = ['Halo','nama','saya','Muhammad Syofi Azmi'];

// const [salam, satu, dua, nama] = perkenalan;


// skipping items
// const [salam, , , nama] = perkenalan;

// console.log(nama);


// swap items - menukar item

// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);

// [a, b] = [b , a];

// console.log(a);
// console.log(b);




// return value pada function

// function coba() {
//     return [1, 2];
// }


// const [a, b] = coba();
// console.log(b);




// Rest Parameter

// const [a, ...values] = [1,2,3,4,5];
// console.log(a);
// console.log(values);




// Destructing Object

// const mhs = {
//     nama : 'Muhammad Syofi Azmi',
//     umur : 26
// }

// const { nama, umur } = mhs;
// console.log(nama);



// Assignment tanpa deklarasi object

// ({ nama,umur } = { nama: 'Muhammad Syofi Azmi', umur: 33});

// console.log(umur);




// Assign ke variabel baru
// const mhs = {
//     nama: 'Muhammad Syofi Azmi',
//     umur: 26
// }

// const { nama: n, umur: u } = mhs;
// console.log(n);



// Memberikan default value

// const mhs = {
//         nama: 'Muhammad Syofi Azmi',
//         umur: 26,
//         email: 'azmi@yahoo.com'
// }
    
// const { nama, umur, email = 'syofi@gmail.com' } = mhs;
// console.log(email);



// memberi nilai default + assign ke variabel baru
// const mhs = {
//     nama: 'Muhammad Syofi Azmi',
//     umur: 26,
//     email: 'azmi@yahoo.com'
// }

// const { nama: n, umur: u, email: e = 'syofi@gmail.com' } = mhs;
// console.log(e);




// rest parameter
// const mhs = {
//     nama: 'Muhammad Syofi Azmi',
//     umur: 26,
//     email: 'azmi@yahoo.com'
// }

// const { nama, ...values } = mhs;
// console.log(values);




// mengambil field pada object, setelah dikirim sebagai parameter untuk function

// ini cara seperti biasa

// const mhs = {
//     id: 123,
//     nama: 'Muhammad Syofi Azmi',
//     umur: 26,
//     email: 'azmi@yahoo.com'
// }


// function getIdMhs(mhs) {
//     return mhs.id;
// }

// console.log(getIdMhs(mhs));





// pakai desctructuring object


const mhs = {
    id: 123,
    nama: 'Muhammad Syofi Azmi',
    umur: 26,
    email: 'azmi@yahoo.com'
}

// ambil field atau properti yang diinginan aja
function getIdMhs({ id, nama}) {
    return id;
}

console.log(getIdMhs(mhs));