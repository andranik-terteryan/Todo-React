import { ITodo } from "../../interface";
import TodoItem from "../ToDoItem/ToDoItem";
import styles from './todoList.module.scss'

interface TodoListProps {
    todos: ITodo[];
    handleComplete: (id: string) => void;
    hadnleDeleteTodo: (id:string) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, handleComplete,hadnleDeleteTodo }) => {
    return (
        <div className={styles.todoItemsOverlay} >
            <ul className={styles.todolistOverlay}>
                {todos.map((item) => (
                    <TodoItem key={item.id} hadnleDeleteTodo={hadnleDeleteTodo} item={item} handleComplete={handleComplete} />
                ))}
            </ul>
        </div>

    );
};

export default TodoList;
