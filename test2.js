const details = {
    message: 'Hello World!'
}

function getMessage() {
    return this.message
}

console.log(getMessage.call(details))