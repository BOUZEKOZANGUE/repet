//class patern
class Task{
    constructor(name){
        this.name = name;
        this.completed = false;
    }
    complete(){
        this.completed = !this.completed;
    }
    toString(){
        if (!this.completed) {
            console.log("The task is not complete " + this.name);
        }
        else{
            console.log("Completed your done it :" + this.name );
        }
    }
}
let task1  = new Task("learn javascript patern");
let task2 = new Task("all you want in js with de class in js patern");

task1.toString()
task2.toString()
task1.complete()
task1.toString()
