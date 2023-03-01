// Destructuring

// gimana destructuring ini berpengaruh pada function


// Destructuring return value

// function penjumlahanPerkalian(a,b){
//     return [a + b, a * b];
// }

// // const jumlah = penjumlahanPerkalian(2, 3)[0];
// // const kali = penjumlahanPerkalian(2, 3)[1];

// const [jumlah, kali] =  penjumlahanPerkalian(2, 3)

// console.log(jumlah);
// console.log(kali);



// function kalkulasi(a,b){
//     return [a + b, a - b ,a * b, a / b];
// }

// const [tambah, kurang, kali, bagi = 'tidak ada'] =  kalkulasi(2, 3)

// console.log(bagi);



// kalau mau ga urut return value nya ganti object
// function kalkulasi(a,b){
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }


// const {bagi, tambah, kali, kurang} =  kalkulasi(2, 3)

// console.log(bagi);



// Destructuring function argument

const mhs1 = {
    nama: 'Muhammad Syofi Azmi',
    umur: 26,
    email: 'syofi@yahoo.com',
    niai: {
        tugas: 85,
        uts: 85,
        uas: 75
    }
}

function cetakMhs({ nama, umur, niai: {tugas, uts, uas}}) {
    return `Halo nama saya ${nama}, saya berumur ${umur} tahun. Nilai uas saya ${uas}`;
}

console.log(cetakMhs(mhs1));