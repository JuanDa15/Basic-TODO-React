import './TodoList.css';

export default function TodoList(props) {
  const renderFn = props.children || props.render;
  return (
    <ul>
      { props.error && props.onError() }
      { props.loading && props.onLoading() }
      { (
          !props.loading && 
          (props.search.length === 0) && 
          (props.todosLength === 0)
        ) && props.onEmptyTodos('There is no TODOS yet') 
      }
      { (
          !props.loading && 
          (props.search.length > 0) && 
          (props.todosLength === 0)
        ) && props.onEmptyTodos(`There are not TODOS for ${props.search}`)
      }
      { (props.todos && !props.loading && !props.error) && props.todos.map(renderFn) }
    </ul>
  )
}