// for of merupakan merupakan looping yang memang iterable atau mungkin object yang dapat di iterasikan

// membuat for of

// array
let arr = ["nugie kurniawan","alexander kurniawan","muhammad nadin nugraha","alexandria kurniawati"]

for(const nama of arr){
    console.log(nama)
}

// mengambil index dari for of
console.log("=================")
for(const [index,name] of arr.entries()){
    console.log(`${name} mahasiswa ke-${index+1}`)
}

// string
console.log("==================")
let string = "Nugie kurniawan"
for(const c of string){
    console.log(c)
}