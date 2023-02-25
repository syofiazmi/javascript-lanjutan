// Template Literal atau Template String

// const nama = 'Syofi';
// const umur = 26;

// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);


// Embedded Expression

// console.log(`${1 + 1}`);
// atau bisa juga panggil function
// console.log(`${alert('Hallooooooooooooo!')}`);
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);



// HTML Fragments

const mhs = {
    nama: 'Muhammad Syofi Azmi',
    umur: 26,
    nim: 'E123456',
    email: 'syofi@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
</div>`;

console.log(el);

