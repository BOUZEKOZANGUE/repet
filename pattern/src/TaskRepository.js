let TaskRepository = function () {
    //private variable
    let items = {};
    let instance = null;

    let add = function (task) {
        items[task.name] = task;
    };

    let remove = function (task) {
        items[task.name] = null;
    };

    let getAll = function () {
        console.log(items);
        return items;
    };

    let getInstance = function(){
        if (!instance) {
            console.log("completed");
            instance = this;
        }
            console.log("uncompleted");
            return instance;
    }
    //revelling pattern
    return {
        add: add,
        remove: remove,
        getAll: getAll,
        instance: getInstance
    };
};
module.exports = TaskRepository;
