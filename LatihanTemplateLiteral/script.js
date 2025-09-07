// seandainya ada data api

const data = [
    {nama:"Nugie kurniawan",
        univ : "Stmik mardira indonesia"
    },
    {nama:"Azib almazida",
        univ : "Universitas"
    },
    {nama:"Alexander kurniawan",
        univ : "universitas pasundan bandung"
    },
    {nama:"nadin nugraha",
        univ : "universitas teknik"
    },
]
let tampil = function(){
    return data.map(element => `<li>
            <p>Nama : ${element.nama}</p>
            <p>Universitas : ${element.univ}</p>
        </li>`)
}
console.log(tampil())
// bangun hml nya
let teks = `
<ul>
    ${tampil()}
</ul>
`

// rencana mau memasukan ke dalam element html .container

// tangkap element nya 
const container = document.querySelector(".container")

container.innerHTML = teks

