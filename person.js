class Person{
    constructor(nome){
        this.name = nome;
    }


    sayMyName(){
        return `My name is ${this.name}! Hello world!`
    }

}

module.exports = {
    Person,
};