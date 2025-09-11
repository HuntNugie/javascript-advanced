// spread operator merupakan operator yang berfungsi untuk menyebar nyebarkan iterable menjadi pecahan sebaran array, semisalnya jika string menjadi string terpisah 


// array
let mhs = ["Nugie kurniawan", "azib almazida","nadin nugraha"]
let hasil = [...mhs] //jika memakai [] ini akan menjadi copyan array baru
console.log(...mhs) // jika tidak memakai [] ini akan menjadi 1 string yang masing masing element array akan terpisah

// string
let nama = "Nugie kurniawan"
let result = [...nama] // jika memakai [] ini akan menjadi array dimana teks nya masing masing karakter menjadi element array yang terpisah
console.log(...nama) // ini memang menjadi teks kembali hanya saja menjadi terpisahkan dengan spasi dan tidak menyatu

// node list
const liNama = document.querySelectorAll("li")
let asil = [...liNama] // ini akan menjadi seperti copyan dari node list tetapi ini adalah type nya array
console.log(...liNama) // ini akan seperti mengeksekusi menjadi teks 

// mencoba agar saat di pencet menjadi beda warna per karakter

// tangkap nama nya
const nugie = document.querySelector(".nama")
const arrNugie = [...nugie.textContent].map(el=>`<span class="character">${el}</span>`).join("")
nugie.innerHTML = arrNugie

const semuaChar = document.querySelectorAll(".character")
semuaChar.forEach((el)=>{
    el.addEventListener("mouseenter",(event)=>{

            event.target.style.color = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    })
})