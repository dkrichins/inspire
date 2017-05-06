function TodoController(){
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var todoService = new TodoService()

	this.addTodoFromForm = function(e) {
		e.preventDefault()
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		//ADD IT TO THE ARRAY BELOW
		var todosArr = todoService.getTodos()
		todosArr.push(form.todo.value)



		// FINAL ACTION OF ADDING A TODO
		todoService.saveTodos(todosArr)
	}


}
