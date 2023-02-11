// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// var nama = 'Syofi';
// console.log(nama);



// contoh lain

// console.log(sayHello());

// var nama = 'Syofi';
// var umur = 25;

// function sayHello(){
//     return `Halo nama saya ${nama}, saya ${umur} tahun.`;
// }


// function membuat Local execution context
// yang di dalamnya terdapat creation and execution phase
// window
// arguments
// hoisting



// contoh lain

// var nama = 'M. Syofi Azmi';
// var username = '@azmisyofi';

// function cetakUrl(username){
//     var instagramUrl = 'http://instagram.com/';
//     return instagramUrl + username;
// }

// console.log(cetakUrl(username));


//  

// var nama = 'M. Syofi Azmi';
// var username = '@azmisyofi';

// function cetakUrl(){
//     console.log(arguments);
//     var instagramUrl = 'http://instagram.com/';
//     return instagramUrl + username;
// }

// console.log(cetakUrl('@hafizanwari'));



// contoh lain

// function a(){
//     console.log('ini a');

//     function b(){
//         console.log('ini b');

//         function c(){
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();



// Latihan

function satu() {
    var nama = 'Syofi';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Hafiz';
satu();
dua('Subhan');
console.log(nama);