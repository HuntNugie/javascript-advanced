# JAVASCRIPT LANJUTAN (ADVANCED)

## Object create
berfungsi untuk membuat object baru serta parameter di dalamnya dapat berisi object yang akan di tunjuk sehingga object baru tersebut bisa menggunakan property dan method dari object lain(jadi object yang di dalam parameter akan di gunakan sebagai pointer)

### Cara penggunaan
```js
function Manusia(nama,umur){
    this.nama = nama
    this.umur = umur
}
let nugie = new Manusia("Nugie kurniawan",21)
let objBaru = Object.create(nugie) // ini bukan lah instance kelas manusia tetapi membuat objBaru menjadi object baru yang kosong dan mewarisi properti dan method dari object manusia
```

## prototype
prototype merupakan wadah dimana kita dapat menyimpan object, method atau property dari objek lain.

### menambahkan method atau propery kedalam prototype
menambahkan property atau method ke dalam prototype sebenernya sama aja seperti menambahkan property dan method pada object itu sendiri hanya berbeda menggunakan keyword property prototype
```js
function Manusia(nama,umur){
    this.nama = nama
    this.umur = umur
}
Manusia.prototype.makan = function(){ // ini salah satu contoh menambahkan method
    return `${this.nama} sedang makan`
}
let nugie = new Manusia("nugie",21)
console.log(nugie.makan())
```

### untuk memanggil property atau method
untuk memanggil property atau method yang berada di dalam prototype itu kita seperti biasa memanggil property atau method di object biasa
```js
function Manusia(nama,umur){
    this.nama = nama
    this.umur = umur
}
Manusia.prototype.makan = function(){
    return `${this.nama} sedang makan`
}
let nugie = new Manusia("nugie",21)
console.log(nugie.makan()) //ini salah satu contoh mendapatkan method prototype 
```
