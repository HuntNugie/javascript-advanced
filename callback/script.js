// // callback

// function tampilkanNama(callback){
//     const nama = prompt("Masukan nama anda : ")
//     callback(nama)
// }

// tampilkanNama(()=>alert(`halo`))

Array.prototype.forEachNugie = function(callback){
    for(const i of this){
        callback(i)
    }
};
let arr = [1,2,3,4,5]
arr.forEachNugie((element)=>{
    console.log(element)
})
