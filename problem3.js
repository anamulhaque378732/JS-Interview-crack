


new Promise((resolve) => {

    resolve("First promise")
    Promise.resolve().then(() => {
        console.log("Second promise");

    });
}).then((data) => {
    console.log(data);

});













