// template literal merupakan template string yang berfungsi untuk mempermudah kita dalam mengelola string
// menggunakna back tick (``)

// semisal anda mau memasukan sebuah expression ke dalam string
let nama = "Nugie kurniawan"
console.log(`nama anda adalah ${nama}`)


// bisa untuk merangkai html fragment
let mahasiswa = {
    nama:"Nugie kurniawan",
    prodi : "Teknik informatika",
    kelas : "A2024"
}

let html = `<div class="container">
<h1>Hallo nama saya ${mahasiswa.nama}</h1>
<h2>Saya Prodi ${mahasiswa.prodi}</h2>
<h3>Saya kelas ${mahasiswa.kelas}</h3>
</div>`;

let node = document.createElement("div")
node.innerHTML = html
document.body.insertBefore(node,document.querySelector("script"))