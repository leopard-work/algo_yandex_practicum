const object = {
    prefix: "A?.",
    list: ["Frontend", "Backand", "QA"],
    log() {
        this.list.forEach( (item) =>  {
            console.log(this.prefix + item);
        });
    },
}

object.log();