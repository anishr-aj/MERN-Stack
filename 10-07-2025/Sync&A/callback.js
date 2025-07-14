function getData(dataid) {
    setTimeout(() => {
        console.log("Data id", dataid)
    },3000)
}
getData(4)
getData(5)

function getData(dataid, getnextdata) {
    setTimeout(() => {
        if(getnextdata) {
            getnextdata();
        }
    },3000)
}

getData(1,() =>{
    getData(3,()=>{}
    getData(4)})
})