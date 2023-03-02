// Spread Operator

// memecah iterable menjadi single element


// const mhs = ['Syofi','Hafiz','Subhan'];
// console.log(...mhs[0]);



// menggabungkan 2 array / lebih

// const mhs = ['Syofi','Hafiz','Subhan'];
// const dosen = ['Ilyas','Evi','Wildan'];
// const orang = [...mhs, 'Aji',...dosen];

// console.log(orang);




// meng-copy nilai pada array
// const mhs = ['Syofi','Hafiz','Subhan'];
// const mhs1 = [...mhs];
// mhs1[0] = 'Fajar';
// console.log(mhs1);



// const liMhs = document.querySelectorAll('li');
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);




const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');

nama.innerHTML = huruf;