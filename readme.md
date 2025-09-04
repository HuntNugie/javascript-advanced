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

## Execution context,hoisting,scope

### Execution context
di javascript ada 2 fase
-creation phase
-execution phase

creation phase -> semua variabel dan function akan di buat di dalam memori terlebih dahulu(hoisting) dimana variabel akan di set di isi dengan undeinfed dan function akan dis set dan disi dengan isi function nya.

<br>
<br>
execution phase -> nah disini baru fase akan mengeksekusi code baris per baris dan jika ada kode yang menjalankan function maka function tersebut akan mengalami yang namanya local creation context disini variabel dan function yang ada di dalam function akan di hoisting setelah di hoisting akan kembali lagi mengeksekusi function nya dan selesai.
dan execution stack akan di hilangkan dalam memori

### hoisting
hoisting merupakan sebuah aksi dimana variabel atau function akan di angkat ke atas terlebih dahulu untuk masuk ke dalam creation phase setelah creation phase baru ke execution phase

### Scope
scope itu seperti wilayah kekuasaan ada yang namanya global scope ada yang namnya local scope <br>
-> semisal ada function yang di dalamnya terdapat variabel dan argument, di function tersebut terdapat local scope dan pencarian untuk execution phase yang ada di dalam function tersebut akan mengutamakan local scope function nya seandainya di dalam nya terdapat variabel untuk execution phase nya maka akan itu di dahului, dan jika tidak ada maka akan mencari ke argument jika masih tidak ada maka akan mencari ke global scope