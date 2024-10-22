import React, { useState } from "react";
import { TodoFormProps } from "../../interface";
import styles from './todoForm.module.scss'

const TodoForm: React.FC<TodoFormProps> = ({ handleAddItem, value, setValue }) => {
    const [isAdded, setIsAdded] = useState<boolean>(false)

    const handleChange = (value: string) => {
        setValue(value)
    }

    return (
        <div className={`${styles['form-overlay']} ${isAdded ? styles.isAdded : ''}`}>
            <input className={styles['todo-input']} value={value} onChange={(e) => handleChange(e.target.value)} type="text" />
            <button className={styles['submit-button']} onClick={handleAddItem}>Add Todo</button>
        </div>
    )
}

export default TodoForm;