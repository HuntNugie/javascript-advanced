// desutructuring assiment berfungsi untuk membongkar array ataupun object sehingga kita bisa mengset isi nya dengan nama variabel 

// pembuatan destructuring assigment
// semisal ada array 
let teks = "nama saya adalah nugie"
// menggunakan split method untuk memisahkan string menjadi teks
const data = teks.split(" ")

// destructuring assigment
const [satu,dua,tiga,empat] = data


// bisa untuk menukar nilai
let a = 10;
let b = 5;
console.log(a);
console.log(b);
[a,b] = [b,a];
console.log(a);
console.log(b);

// skipping item

const [one,,,name] = data
console.log(one + " " + name)

// menggunakan rest paramter
const [hiji,...value] = data
console.log(value)

// bisa menggunakna return function
function coba(){
    return [1,2]
}
const [x,y] = coba()
console.log(x,y)
console.log(y,x)

// bisa menggunakan untuk object
// destructuring object
let mhs = {
    nama:"Nugie kurniawan",
    universitas:"stmik mardira indonesia",
}
// harus sama nama variabel nya
const {nama,universitas} = mhs

console.log(nama,universitas)

// bisa berbeda
const {nama:names,universitas:college} = mhs

console.log(names,universitas)

// bisa untuk paramter function
function getNama({nama}){
    return nama
}
console.log(getNama(mhs))


// pembuatan object tanpa deklarasi
const {namae,classes} = {namae:"nadin nugraha",classes:"SMP"}

console.log(namae)

let baru = {
    ada : "ada",
    tidak : "tidak",

}

// bisa di beri nilai default
const {ada,tidak,email = "nugie@gmail.com"} = baru
console.log(ada,tidak,email) 