import { ITodo } from "../../interface";
import DeleteIcon from "../../svg/DeleteIcon";
import styles from './todoItem.module.scss'

interface TodoItemProps {
    item: ITodo;
    handleComplete: (id: string) => void;
    hadnleDeleteTodo: (id: string) => void
}


const TodoItem: React.FC<TodoItemProps> = ({ item, handleComplete, hadnleDeleteTodo }) => {
    return (
        <li
            key={item.id}
            className={`${styles['todoItem']} ${item.isComplete ? styles.checked : ''}`}
        >
            <input
                id={`${item.id}-checkbox`}
                type="checkbox"
                checked={item.isComplete}
                onChange={() => handleComplete(item.id)}
            />
            <label htmlFor={`${item.id}-checkbox`}>
                {item.title}
                <button className={styles['delete-icon']} onClick={() => hadnleDeleteTodo(item.id)} ><DeleteIcon /></button>
            </label>
        </li>

    );
};

export default TodoItem;
