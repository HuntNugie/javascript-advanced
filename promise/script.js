// promise itu adalah objek yang mempresentasikan hasil dari asynchronus dan akan mengembalikan 
/* status       
-state -> janji
-fullfiled -> resolve (true/berhasil/ditepati) -> then
-rejected -> reject(false/tidak berhasil/ingkar) -> catch
-pending -> menunggu
-finally -> fillany(setelah resolve atau reject selesai) ->finally
*/

// let ditepati = true
// let janji = new  Promise((resolve,reject)=>{
//     if(ditepati){
//         resolve("Terima kasih sudah menepati janji")
//     }else{
//         reject("Mungkin kamu tidak menepati janji tapi semangat ya")
//     }
// })

// janji.then((Response) => console.log(Response)).catch(Response=>console.log(Response))

// mencoba untuk mengambil data api
function getData(link){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest()
        xhr.onload = function(){
            if(xhr.status == 200){
                resolve(JSON.parse(xhr.response))
            }else{
                reject("gagal ambil data")
            }
        }
        xhr.open("GET",link)
        xhr.send()
    })
}
getData("https://bukuacak-9bdcb4ef2605.herokuapp.com/api/v1/book?page=1&year=2023&genre=Self-Improvement&keyword=Berani")
    .finally(()=>{
        console.log("Setelah beberapa saat menunggu akhirnya berhasil")
    })
    .then(response => {
        const {books} = response
        let result = books.map(el=>{
            return `<li>${el.title}</li>`
        }).join("")
        document.body.innerHTML = `<ol>${result}</ol>`

    })
    .catch(response => console.log(response))