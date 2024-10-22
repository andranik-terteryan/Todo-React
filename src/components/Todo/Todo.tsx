import TodoForm from "../TodoForm/TodoForm"
import TodoList from "../TodoList/ToDoList"
import useTodo from "./useToDo"
import styles from './todo.module.scss'
import ToDoActions from "../TodoActions/ToDoActions"
const Todo = () => {
    const { value,
        setValue,
        todos,
        handleAddItem,
        handleComplete,
        handleFilterCompleted,
        handleFilterActive,
        handleShowAll,
        hadnleDeleteTodo,
        filter } = useTodo()
    return (
        <>
            <section className={` ${styles.container}`}>
                <div className={`container`}>
                    <div className={styles.todoContainer} >
                        <TodoForm value={value} handleAddItem={handleAddItem} setValue={setValue} />
                        <TodoList hadnleDeleteTodo={hadnleDeleteTodo} todos={todos} handleComplete={handleComplete} />
                        <ToDoActions filter={filter} handleFilterCompleted={handleFilterCompleted} handleFilterActive={handleFilterActive} handleShowAll={handleShowAll} />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Todo