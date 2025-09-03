// prototype adalah konsep inheritance di javsacript yang berfugnsi sebagai mewarisi propertie dan method dari object lain

// const method = {
//     makan:function(porsi){
//         this.energi += porsi
//         return `Hallo ${this.nama}, anda makan ${porsi} porsi, energi anda bertambah menjadi ${this.energi}`
//     },
//     main:function(jam){
//         this.energi -= jam
//         return `Hallo ${this.nama}, anda main ${jam} jam, energi anda berkurang menjadi ${this.energi}`
//     },
//     tidur:function(jam){
//         this.energi += jam*2
//         return `Hallo ${this.nama}, anda tidur ${jam} jam, energi anda bertambah menjadi ${this.energi}`
//     }
// }
// function Manusia(nama,umur,energi){
//     this.nama = nama
//     this.umur = umur
//     this.energi = energi
// }
// Manusia.prototype.makan = function(){
//     this.energi += porsi
//     return `Hallo ${this.nama}, anda makan ${porsi} porsi, energi anda bertambah menjadi ${this.energi}`
// }
 
// di object literal tidak mempunyai propertie prototype tetapi
// const nugie = {
//     nama:"Nugie kurniawan",
//     umur:21,
//     energi:10,
// }

function Manusia(nama,umur,energi){
    this.nama = nama
    this.umur = umur
    this.energi = energi
}
Manusia.prototype.makan = function(porsi){
    this.energi += porsi
    return `hallo ${this.nama} sedang makan ${porsi} porsi`
}

const nugie = new Manusia("Nugie",21,10)

// kesimpulan nya bahwa prototype akan ada jika :
// 1. membuat dengan constructor saat menggunakan new di belakang layar javscript membuat object kosong dan mengarahkan object tersebut ke prototype
// 2. dengan function declaration tetapi harus memakai Object.create(namaFunction.prototype) dan parameter di dalamnya harus agar object itu menunjuk ke prototype
