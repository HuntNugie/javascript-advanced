// ambil semua element javascript
const semua = document.querySelectorAll("ul li")

// ambil yang hanya javascript
let javascript =  Array.from(semua).filter(el => el.textContent.includes("Javascript"))
.map(durasi => durasi.dataset.duration)
.map(durasi => {
    // karna bentuk nya contoh 19:45 jadi di pisah kan di split
    const pisah = durasi.split(":")
    const menit =  (parseInt(pisah[0]) * 60) + parseInt(pisah[1])
    return parseFloat(menit)
}).reduce((hasil,durasi) => hasil + durasi)

// ambil jam
let jam = Math.floor(javascript / 3600);
// ambil menit
javascript = javascript - jam * 3600;
let menit = Math.floor(javascript / 60)
// ambil detik
const detik = javascript - menit * 60

// terapkan
const jmlhDurasi = document.querySelector(".jumlah-durasi")
jmlhDurasi.textContent = `${jam} jam ${menit} menit ${detik} detik`

let jmlhVideo = Array.from(semua).filter(js => js.textContent.includes("Javascript")).length
const jmlhTotalVid = document.querySelector(".jumlah-video")
jmlhTotalVid.textContent = `${jmlhVideo} video`
