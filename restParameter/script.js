// rest parameter berfungsi untuk menyimpan nilai arguments yang dikirim 

// function tambah(...params){
//     // let hasil = 0
//     // for(angka of params){
//     //     hasil += angka
//     // }
//     // return hasil
//     return params.reduce((acc,curr)=>{
//         return acc + curr
//     })
// }

// console.log(tambah(1,2,3,4,5))

function filterBy(type,...values){
    return values.filter((val)=> typeof val == type)
}
console.log(filterBy("boolean",1,2,3,"Nugie",false,true,"Nadin"))