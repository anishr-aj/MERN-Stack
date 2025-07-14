function getData(dataid, getnextdata) {
    setTimeout(() => {
        console.log("data id", dataid)
        if(getnextdata) {
            getnextdata();
        }
    }, 3000)
}
getData(1,() => {
    getData(3,() => {
        getData(4);
    });
});