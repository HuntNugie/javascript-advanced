// membuat object

// object literal
let mahasiswa = {
    nama:"Nugie kurniawan",
    prodi:"Teknik informatika",
    nim:24010004
}

// function declaration
let mahasiswa2 = function(nama,prodi,nim){
    let mhs = {}
    mhs.nama = nama
    mhs.prodi = prodi
    mhs.nim = nim
    return mhs
}
let mhs = mahasiswa2("Nadin nugraha","Teknik komputer jaringan",24010002)

// function constructor
let kampus = function(nama,alamat,dosen){
    this.nama = nama
    this.alamat = alamat
    this.dosen = dosen
}
let kmps = new kampus("stmik mardira indonesia","jln leuwi panjang",["ahfi fauka","okta","adi suwarno"])