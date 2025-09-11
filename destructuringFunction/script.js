// berikut destructuring pada function

// destructuring return value

// destructuring array
function kalkulasi(a,b){
    return [a+b,a-b,a*b,a/b]
}
// harus sesuai dengan urutan nya
let a = parseInt(prompt("Masukan angka pertama : "))
let b = parseInt(prompt("Masukan angka kedua : "))
// bisa menambahkan nilai default jika tidak ada hasil return nya
const [tambah,kurang,kali,bagi = "fitur ini belum ada"] = kalkulasi(a,b)

console.log(`tambah ${a} + ${b} = ${tambah}`)
console.log(`kurang ${a} - ${b} = ${kurang}`)
console.log(`kali ${a} x ${b} = ${kali}`)
console.log(`bagi ${a} / ${b} = ${bagi}`)


console.log("==========================")
// destructuring object
function kalkulator(a,b){
    return {
        nambah:a+b,
        kirang:a-b,
        kulaKali:a*b,
        bugaBagi:a/b,
    }
}

// tidak ada masalah dalam urutan nya
// tetapi nama nya harus sesuai dengan properti nya
const {nambah,kirang,kulaKali,bugaBagi} = kalkulator(a,b)

console.log(`tambah ${a} + ${b} = ${nambah}`)
console.log(`kurang ${a} - ${b} = ${kirang}`)
console.log(`kali ${a} x ${b} = ${kulaKali}`)
console.log(`bagi ${a} / ${b} = ${bugaBagi}`)

// destructuring argument parameter
let manusia = {
    nama:"Nugie kurniawan",
    umur:21,
    salam:function(){
        return `assalamualaiklum nama saya ${this.nama}`
    },
    kulit:"sawo terlalu matang",
    keluarga:{
        bapa:"Jaenudin",
        ibu:"Kurnia eirawati",
        adik:"Muhammad nadin nugraha",
    }
}
function coba(strings,...value){
    let pBaru = document.createElement("p")
    let text = strings.reduce((hasil,str,index)=>{
        return `${hasil}${str} <span style="font-weight:bold">${value[index] || ""}</span>`
    },'')
    pBaru.innerHTML = text
    return document.body.insertBefore(pBaru,document.querySelector("script"))
}
function perkenalan({nama,umur,kulit,keluarga:{bapa,ibu}}){
    return coba `haloo, nama saya adalah ${nama}, umur saya adalah ${umur} tahun,kulit saya berwarna ${kulit},bapa saya bernama ${bapa} dan ibu saya ${ibu}`
}

console.log(perkenalan(manusia))

