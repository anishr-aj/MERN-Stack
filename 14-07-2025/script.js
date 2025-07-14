function getData(dataId) {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            console.log("data is", dataId);
            resolve("Success");
        },4000)
    });
}

async function getAllData() {
    console.log("getting data of 1");
    await getData(1);
    console.log("getting data of 2");
    await getData(2);
    console.log("getting data of 3");
    await getData(3);
    console.log("Getting data of 4");
    await getData(4);
    console.log("getting data of 5");
    await getData(5);
    console.log("getting data of 6");
    await getData(6);
}