function Todo({todo, index, remove}){
    function handle (){
      remove(index);
    }
   // return <div className="todo" onClick={handle}>{todo.text} (-)</div>
    return <div className="card text-white bg-info mb-3" onClick={handle}>
            <div class="card-body">
                <h5 class="card-title">To Do #{index+1}</h5>
                <p class="card-text">{todo.text}</p>
                <a href="#" class="btn btn-primary">Remove</a>
            </div>
           </div>
  }