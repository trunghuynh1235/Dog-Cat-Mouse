var chalk = require ( 'chalk')
function Cat(name){
    this.name= name;
    this.stomach=[];
}

Cat.prototype.eat = function(mouse){
    this.stomach.push(mouse);
}
cat.prototype.sayHi = function(){
    console.log('Hi im a dog' + chalk.blue(this.name));
}
module.exports=Cat;