import styles from './todoActions.module.scss';

interface TodoActionsProps {
    handleFilterCompleted: () => void;
    handleFilterActive: () => void;
    handleShowAll: () => void;
    filter: string; 
}

const ToDoActions: React.FC<TodoActionsProps> = ({ handleFilterCompleted, handleFilterActive, handleShowAll, filter }) => {
    return (
        <div className={styles.todoActions}>
            <button
                className={`${styles.button} ${filter === 'all' ? styles.active : ''}`}
                onClick={handleShowAll}
            >
                All
            </button>
            <button
                className={`${styles.button} ${filter === 'active' ? styles.active : ''}`}
                onClick={handleFilterActive}
            >
                Active
            </button>
            <button
                className={`${styles.button} ${filter === 'completed' ? styles.active : ''}`}
                onClick={handleFilterCompleted}
            >
                Completed
            </button>
        </div>
    );
};

export default ToDoActions;
