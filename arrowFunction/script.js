// arrow function merupakan bentuk simple nya dari expression function, arrow function tidak mempunyai konsep this sendiri sehingga konsep this nya hanya berrdasarkan lexical scope nya bukan disaat function itu di panggil dan tidak mempunyai arguments


// membuat arrow function
// let hallo = (nama)=>{
//     return `nama anda ${nama}`
// }

// jika hanya punya 1 parameter saja bisa seperti ini
// let hallo = nama => {
//     return `nama anda ${nama}`
// }

// jika hanya mengembalikan return 
// let hallo = (nama,waktu)=> `selamat ${waktu} ${nama}`

// jika hanya punya 1 paramter dan hanya mengembalikan return
// let mahasiswa = ["Nugie kurniawan","alexander kurniawan","muhammad nadin nugraha"]

// let mhs = mahasiswa.map(nama => nama.length) // bisa seperti ini  jika callback

// let tes = nama => `nama anda ${nama}` //jika normal

// konsep this
// konsep this di arrow function
// dalam arrow function tidak ada konsep this oleh karna itu this di arrow function itu mengikuti lexical scope nya
let Manusia = {
    nama: "Nugie kurniawan",
    umur: 21,
    hello: ()=>{
        return `halo nama saya ${this.nama}` // ini akan jadi undefined karna dalam object literal itu tidak ada konsep this
    },
}