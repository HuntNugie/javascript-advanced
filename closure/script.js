// closure merupakan sebuah konsep dimana local scope memerlukan sebuah nilai di lexical scope nya 

// contoh closure
function haloWaktu(waktu){
    return function(nama){
        console.log(`halo selamat ${waktu} ya ${nama}`) // disini function tanpa nama memerlukan variabel parameter waktu dari lexical scope nya yaitu haloWaktu
    }
}

let selamatPagi = haloWaktu("pagi") // saat pertama kali di simpan dalam variabel ini akan mengset parameter di lexical scope nya dan menyimpan return function nya di dalam variabel
let selamatSiang = haloWaktu("siang")
let selamatMalam = haloWaktu("malam")

selamatPagi("Nugie kurniawan") //nah disini baru function yang ada di dalamnya di jalankan
selamatMalam("Alexander kurniawan")
selamatSiang("Muhammad nadin nugraha")

// contoh closure v2
// let add = function(){
//     let counter = 0
//     return function(){
//         return ++counter
//     }
// }

// console.log(add()) //jika hanya seperti ini di dalam console hanya berisi function nya belum menjalankan 

// cara yang lebih bagus jika ingin tidak menyimpan dulu ke dalam variabel agar bisa menjalankan function inner nya
let add = (function(){
    let counter = 0
    return function(){
        return ++counter
    }
})() //jadi disini saat mendefinisikan function nya akan langsung menjalankan outer functionnya sehingga variabel add disini akna berisi nilai function innernya

console.log(add())
console.log(add())
console.log(add())
