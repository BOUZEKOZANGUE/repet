class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }
  complete() {
    this.completed = !this.completed;
  }
  toString() {
    if (!this.completed) {
      console.log(
        "The task is not complete " +
          this.name +
          " Completed not " +
          this.completed
      );
    } else {
      console.log(
        "Completed your done it :" +
          this.name +
          " Completed is " +
          this.completed
      );
    }
  }
}
module.exports = Task;
