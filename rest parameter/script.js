// Rest Parameter

// function myFunc(a, b, ...myArgs){
//     return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// }

// console.log(myFunc(1,2,3,4,5));


// pakai array.from()
// function myFunc(){
//     return Array.from(arguments);
// }

// pakai spread
// function myFunc(){
//     return [...arguments];
// }

// console.log(myFunc(1,2,3,4,5));

// function jumlahkan(...angka){z

//     //pakai for .. of
//     // let total = 0;
//     // for(a of angka) {
//     //     total += a;
//     // }

//     // return total;

//      // pakai reduce
//     // return angka.reduce( (a,i) => a + i);


// }


// kita mau menjumlahkan argumen
// console.log(jumlahkan(1,2,3,4,5));




// array destructuring
// const kelompok1 = ['Syofi', 'Hafiz', 'Subhan', 'Fuadi', 'Fuad', 'Jimi'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);



// object destructuring
// const team = {
//     pm: 'Syofi',
//     frontEnd: 'Hafiz',
//     backEnd: 'Subhan',
//     ux: 'Jimi',
//     devOps: 'Fuad'
// }

// const { pm, ...myTeam} = team;
// console.log(myTeam);




// filtering

function filterBy(type, ...values){
    return values.filter(v => typeof v === type);
}

console.log(filterBy('boolean',1,2,3,'Syofi',false,10,true,'Hafiz'));
