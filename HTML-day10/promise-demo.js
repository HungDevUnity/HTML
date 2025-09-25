let isFail = false; 
let loadDocument = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (!isFail) {
            resolve("Tải thành công!");
        } else {
            reject("Tải thất bại!");
        }   
    }, 2000);
});


loadDocument.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);   
});