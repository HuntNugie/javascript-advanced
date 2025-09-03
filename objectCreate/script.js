// object.create merupapkan method di javascript yang berfungsi untuk membuat sebuah object baru dan bisa sekaligus menambahkan object lain ke dalam object baru nya tanpa perlu duplikasi 

const method = {
    makan:function(porsi){
        this.energi += porsi
        return `Hallo ${this.nama}, anda makan ${porsi} porsi, energi anda bertambah menjadi ${this.energi}`
    },
    main:function(jam){
        this.energi -= jam
        return `Hallo ${this.nama}, anda main ${jam} jam, energi anda berkurang menjadi ${this.energi}`
    },
    tidur:function(jam){
        this.energi += jam*2
        return `Hallo ${this.nama}, anda tidur ${jam} jam, energi anda bertambah menjadi ${this.energi}`
    }
}
function Manusia(nama,umur,energi){
    let manusia = Object.create(method)
    manusia.nama = nama
    manusia.umur = umur
    manusia.energi = energi
    return manusia
}
const nugie = Manusia("Nugie kurniawan",21,10)