let TaskRepository = function () {
    //private variable
    let items = {};
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
    //revelling pattern
    return {
        add: add,
        remove: remove,
        getAll: getAll,
    };
};
module.exports = TaskRepository;
