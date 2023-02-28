// Tagged Templates

//  const nama = 'Muhammad Syofi Azmi';
//  const umur = 26;

//  function coba(strings, ...values){
//     // let result = '';
//     // strings.forEach((s, v) => {
//     //     result += `${s}${values[v]}`;
//     // });
//     // return result;


//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
//  }

//  const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;


//  console.log(str);



// Highlight

const nama = 'Muhammad Syofi Azmi';
const umur = 26;
const email = 'syofi@gmail.com'

function highlight(strings, ...values){

   return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun. ${email}`;


document.body.innerHTML = str;