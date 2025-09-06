// contoh higher order function di object array

const angka = [-1,2,4,3,5,-6,7,-9,8,9]

// filter angka >=3 dan berurutan dari yang terkecil ke yang terbesar
let baru = angka.filter(number => number >= 3).sort((a,b) => a-b)

// map semua nya kalikan 2
let mapBaru = angka.map(a => a*2)
console.log(mapBaru)

// reduce
// reduce sendiri berfungsi untuk memanipulasi seluruh array nya mau di apakan
// mau di jumlahkan kan masing masing elementnya
let jmlh = angka.reduce((angkaAwal,element) => angkaAwal + element) // parameter kedua reduce bisa di isi dengan mau angkaAwal nya mau di mulai dari berapa
console.log(jmlh)

// chain method
// menyambung para function higher order function
let chain = angka.filter(a=>a>=5).map(a=>a*3).reduce((angkaAwal,element) => angkaAwal + element)
console.log(chain)
