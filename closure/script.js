// function init(){
//     // let nama = 'Syofi';

//     function tampilNama(nama){
//         console.log(nama);
     
//     }
//     return tampilNama;
// }
// let panggilNama = init();

// panggilNama('Hafiz');




// Function Factory

// function ucapkanSalam(waktu){
//     return function(nama) {
//         console.log(`Hallo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');


// selamatPagi('Syofi');

// console.dir(selamatMalam);






// Private Method

// let counter = 0;

// let add = function(){
//     return function(){
//         return ++counter;
//     }
// }

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());


let counter = 0;

let add = (function(){
    return function(){
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());

