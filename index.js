function App(){
    const [todos, setTodos] = React.useState([
      {
        text: 'Watch the videos',
        isCompleted: false,
      },
      {
        text: 'Answer the Knowledge Checks',
        isCompleted: false,
      },
      {
        text: 'Watch more videos',
        isCompleted: false,
      },
      {
        text: 'Attempt the project example',
        isCompleted: false,
      }        
    ])
  
    const addTodo = text => {
      const newTodos = [...todos, {text:text, isCompleted:false}];
      setTodos(newTodos);
    }
  
    const removeTodo = index => {
      let temp = [...todos];
      temp.splice(index, 1);
      setTodos(temp)
    }
    return(
        <div className="app">
          <div className="todo-list">
            {todos.map((todo, i) => 
              <Todo index={i} key={i} todo={todo} remove={removeTodo}/>)}
            <TodoForm addTodo={addTodo}/>
          </div>
        </div>
    );
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );