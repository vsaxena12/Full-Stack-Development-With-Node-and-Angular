function func() {
    let data = `<h4> ${"Hello World"} </h4>`;
    document.getElementById('helloWorldID').innerHTML = data;
}
func();

function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('Promise Resolved');
                resolve();
            }
            else {
                console.log('Promise Reject');
                reject('Cannot do it');
            }
        }, 2000);
    })
}

func1().then(() => {
    console.log("Thanks for resolving");
}).catch(() => {
    console.log("Sorry, Can't Help");
});