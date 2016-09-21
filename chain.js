function taskA () {
    console.log("TaskA");
}

function taskB () {
    console.log("TaskB");
    throw new Error('Error');
}

function onRejected(error) {
    console.log("error = " + error);
}

var promise = Promise.resolve();
promise
.then(taskA)
.then(taskB)
.catch(onRejected);
