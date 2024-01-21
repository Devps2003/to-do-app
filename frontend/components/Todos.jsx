export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
            <h1>{todos.title}</h1>
            <h2>{todos.description}</h2>
            <button>{todos.completed ===true?"COmpleted":"Marks as done"}</button>
        </div>
        })}
    </div>
}