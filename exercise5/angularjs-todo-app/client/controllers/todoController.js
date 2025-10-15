class TodoController {
    constructor($scope, TodoService) {
        this.$scope = $scope;
        this.TodoService = TodoService;
        this.todos = [];
        this.newTodo = '';

        this.loadTodos();
    }

    loadTodos() {
        this.TodoService.getTodos().then((response) => {
            this.todos = response.data;
        });
    }

    addTodo() {
        if (this.newTodo) {
            const todo = { text: this.newTodo, completed: false };
            this.TodoService.addTodo(todo).then(() => {
                this.todos.push(todo);
                this.newTodo = '';
            });
        }
    }

    removeTodo(index) {
        const todo = this.todos[index];
        this.TodoService.removeTodo(todo).then(() => {
            this.todos.splice(index, 1);
        });
    }
}

angular.module('todoApp').controller('TodoController', TodoController);