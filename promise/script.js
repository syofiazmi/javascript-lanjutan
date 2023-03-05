// pakai jQuery

// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=528ee0a4&s=avengers',
//     success: movies => console.log(movies)

// });



// pakai vanilla javascript

    // const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function () {
    //     if(xhr.status === 200) {
    //         if (xhr.readyState === 4){
    //             console.log(JSON.parse(xhr.response));
    //         }
    //     } else {
    //         console.log(xhr.responseText);
    //     }
    // }

    // xhr.open('get', 'http://www.omdbapi.com/?apikey=528ee0a4&s=avengers');
    // xhr.send();



// pakai fetch

// fetch('http://www.omdbapi.com/?apikey=528ee0a4&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));



// promise


// contoh1

// let ditepati = false;
// const janji1 = new Promise((resolve, reject) =>{
//     if (ditepati){
//         resolve('Janji ditepati!');
//     } else {
//         reject('Ingkar janji..');
//     }
// });



// janji1
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));



// contoh2

// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati){
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati, setelah beberapa waktu!');
//         }, 2000);
//     }
// }); 



// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
// .finally(() => console.log('selesai menunggu!'))
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response));
// console.log('selesai');




// Promise.all()
const film = new Promise ( resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avenger',
            sutradara: 'Syofi',
            pemeran: 'Hafiz, Subhan'
        }])
    }, 1000);
}); 


const cuaca = new Promise ( resolve => {
    setTimeout(() => {
        resolve([{
           kota: 'Banjarmasin',
           temp: 30,
           kondisi: 'Cerah Berawan'
        }])
    }, 500);
});


// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));


Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const[film, cuaca] = response;;
        console.log(film);
        console.log(cuaca);
    });

