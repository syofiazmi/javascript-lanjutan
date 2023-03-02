// for .. of

// Array

// const mhs = ['Syofi','Subhan','Hafiz'];

// for (let i = 0; i < mhs.length; i++){
//     console.log(mhs[i]);
// }


// const mhs = ['Syofi','Subhan','Hafiz'];

// // mhs.forEach(m => console.log(m));


// for (const m of mhs) {
//     console.log(m);
// }


// String

// const nama = 'Syofi';
// for (const n of nama) {
//     console.log(n);
// }


// const mhs = ['Syofi','Subhan','Hafiz'];

// mhs.forEach((m , i) => console.log(`${m} adalah mahasiswa ke-${i + 1}`));

// for (const [i , m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`)
// }



// const liName = document.querySelectorAll('.nama');

// liName.forEach(n => console.log(n.innerHTML));


// for ( n of liName){
//     console.log(n.textContent)
// }




// argument

// function jumlahAngka(){
//     // let jumlah = 0;
//     // for (a of arguments) {
//     //     jumlah += a;
//     // }
//     // return jumlah;

//     return arguments;
// }

// console.log(jumlahAngka(1,2,3,4,5));
// // console.log(jumlahAngka(1,2,3,4,5,6));



// for .. in

const mhs = {
    nama: 'Syofi',
    umur: 26,
    email: 'syofi@yahoo.com' 
}

for (m in mhs) {
    console.log(m);
}