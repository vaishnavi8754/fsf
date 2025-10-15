class TodoService {
    constructor($http) {
        this.$http = $http;
        this.apiUrl = '/api/todos';
    }

    getTodos() {
        return this.$http.get(this.apiUrl)
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching todos:', error);
                throw error;
            });
    }

    addTodo(todo) {
        return this.$http.post(this.apiUrl, todo)
            .then(response => response.data)
            .catch(error => {
                console.error('Error adding todo:', error);
                throw error;
            });
    }

    removeTodo(todoId) {
        return this.$http.delete(`${this.apiUrl}/${todoId}`)
            .then(response => response.data)
            .catch(error => {
                console.error('Error removing todo:', error);
                throw error;
            });
    }
}

angular.module('todoApp').service('TodoService', TodoService);