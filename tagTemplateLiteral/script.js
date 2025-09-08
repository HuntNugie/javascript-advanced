// tag template literal berfungsi untuk membuat template literal di pinggir nya bisa menjadi parameter di function tag nya

let Highlight = function(strings,...value)
{  
    return strings.reduce((hasil,str,index)=>{
        return `${hasil}${str} <span style="background-color:salmon"> ${value[index] || ''}</span>`
},'') 
}


nama = "Nugie kurniawan"
let umur = 21
let email = "nugiekurniawan@gmail.com"
let str = Highlight `nama saya adalah ${nama} umur saya ${umur},${email}` // ini akan di ubah menjadi array dari nilai paramter pertama akan menampung string nya di pisahkand engan expression nya

document.body.innerHTML = str
console.log(str)