// fetch itu sebuah api untuk mendapatkan resource lain dapat berupa link url api dan object seperti promise
// fetch mengembalikan object

fetch("https://api.fazriansyah.eu.org/v1/sekolah?npsn=20205428")
    .then(response => response.json())
    .then(({data}) => {
        const {satuanPendidikan} = data
        console.log(satuanPendidikan.nama)
    })