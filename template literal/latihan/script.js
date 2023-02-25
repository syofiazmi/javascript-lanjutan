// 1. HTML Fragments

// const mhs = {
//     nama: 'Muhammad Syofi Azmi',
//     umur: 26,
//     nim: 'E123456',
//     email: 'syofi@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nim">${mhs.nim}</span>
// </div>`;


// 2. Looping

// const mhs = [
//     {
//         nama: 'Syofi',
//         email: 'syofi@gmail.com'
//     },
//     {
//         nama: 'Hafiz',
//         email: 'hafiz@gmail.com'
//     },
//     {
//         nama: 'Subhan',
//         email: 'subhan@gmail.com'
//     }
// ];

// kita looping pakai HOF map
// chaing pakai join, biar (koma nya) hilang

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</>
//     </ul>`).join('')} 
// </div>`;



// 3. Conditional

// ternary

// const lagu = {
//     judul: 'Kau Adalah',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : '' }</li>
//     </ul>
// </div>`;



// 4. Nested

// HTML Fragmen bersarang

const mhs = {
    nama: 'Muhammad Syofi Azmi',
    semester: 5,
    mataKuliah: [
        'Pemrograman Web',
        'Matematika Diskrit',
        'Algoritma Pemrograman',
        'Arsitektur Komputer'
    ]
};


function cetakMatakuliah(mataKuliah){
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `
}


const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMatakuliah(mhs.mataKuliah)}
</div>`;


document.body.innerHTML = el;