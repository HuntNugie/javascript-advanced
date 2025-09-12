function getData(link,success,error){
    let ajax = new XMLHttpRequest()
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            if(ajax.status == 200){
                success(JSON.parse(ajax.response))
            }else{
                error()
            }
        }
    }
    ajax.open("GET",link)
    ajax.send()
}
getData("https://api-sekolah-indonesia.vercel.app/sekolah?page=1&perPage=5",(json)=>json.dataSekolah.forEach((el)=>{
    console.log(el.sekolah)
}),()=>{console.log("gagal")})