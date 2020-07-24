console.log("Fetch");

async function fetchTodos(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json()
    completedTodos = todos.filter(todo=>todo.completed==true);
    console.log(completedTodos)
}
fetchTodos();