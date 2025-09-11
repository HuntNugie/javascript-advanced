// for in merupakan looping untuk enumerable seperti object literal yang hanya memiliki key dan value 

let mobil = {
    namaMobil : "Nissan",
    series : "GTR R-35",
    mesin : "Rb26b",
    liter : 50,
}
for(const properti in mobil){
    console.log(mobil[properti]) // ini hanya mengembalikan nama properti nya
}
