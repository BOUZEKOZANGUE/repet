
const TYPES = {
    event:"event",
    todo:"todo"
}

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
class EvenTask extends Task{
    constructor(name){
        super(name)
        this.date = new Date();
        this.skeduleTask = this.date.setDate(this.date.getDate() + 2);
    }
    toString(){
        if (this.skeduleTask < new Date) {
            console.log("la date du rdv est  déja passe "); 
        }
        else{
            console.log("votre rdv est fixe pour le  :" + new Date(this.skeduleTask).toLocaleDateString() + " a Douala");
        }
    }
}
class TodoTask extends Task{
    constructor(name){
        super(name)
        this.priorities = ["normal" , "high"]
        this.priority = 0;
    }
    priorites(){
        this.priority = !this.priority
    }
    toString(){
        if (!this.priority) {
            console.log("la tache est normal : " + this.name); 
        }
        else{
            console.log("les tache est de haut niveau  :" + this.name);
        }
    }
}
class TaskFactory{
    createTask(type,name){
        switch (type) {
            case TYPES.event:
                return new EvenTask(name);
            case TYPES.todo:
                return new TodoTask(name);
        }

    }
}

let task1  = new Task("learn javascript pattern");
let task2 = new Task("all you want in js with de class in js patern")
let ev = new EvenTask()
let todo = new TodoTask("la tache a ete effectue ac succes")

// task1.toString()
// task2.toString()
task1.complete()
task1.toString()
ev.toString()
todo.priorites()
todo.toString()

// utilisation du Factory
let factory = new TaskFactory()
console.log("==============Factory==========");

let ev1 = factory.createTask(TYPES.event, "learn js pattern")
let new_task = factory.createTask(TYPES.todo, "the event skedule")


ev1.toString()
new_task.priorites()
new_task.toString()