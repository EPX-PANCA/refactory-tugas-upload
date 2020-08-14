var app = new Vue({
    el: '#app',
    data() {
        return {
            todos: [],
            todo: ""
        }
    },
    created() {
        this.loadLocalStorage();
    },
    methods: {
        loadLocalStorage() {
            const ls = JSON.parse(localStorage.getItem("todos"))
            console.log(ls)
            if (ls == null) {
                return;
            }
            this.todos = ls;
            console.log(this.todos);
        },
        addTodo() {
            this.todos.push(this.todo);
            this.todo = "";
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    },
    
})