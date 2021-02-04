messages = {
    firstPartOptions: ["Good News!","Bad News.","Tough News.","Awesome News!","Got some news.","Hello!"],
    secondPartOptions: ["Tomorrow","Later today","Tonight","Very soon","At some point","In a fortnight","Within the week"],
    thirdPartOptions: ["you will win $1 million dollars!","you will discover tragedy.","you will meet your maker.","something shiny will come your way.","you will set off on an adventure.","you will have incredible luck!"],

    generateMessage() {
        let options = this.firstPartOptions;
        let random = Math.floor(Math.random() * options.length);
        let message = options[random];

        options = this.secondPartOptions;
        random = Math.floor(Math.random() * options.length);
        message = message + " " + options[random];

        options = this.thirdPartOptions;
        random = Math.floor(Math.random() * options.length);
        message = message + " " + options[random];

        return message;
    }
}

console.log(messages.generateMessage());