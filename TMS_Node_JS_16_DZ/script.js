let promise = new Promise(function (resolve) {
    setTimeout(() => resolve('Команата убрана'), 5000)
});

promise.then(function (result) {
    console.log(result)
});