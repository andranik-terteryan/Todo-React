import { useEffect, useState } from "react";
import { ITodo } from "../../interface";
import { v4 as uuidv4 } from 'uuid';

const useTodo = () => {
    const [value, setValue] = useState<string>("");
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [filter, setFilter] = useState<'all' | 'completed' | 'active'>('all');

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }

        const urlParams = new URLSearchParams(window.location.search);
        const filterParam = urlParams.get('filter') as 'all' | 'completed' | 'active';

        if (filterParam) {
            setFilter(filterParam);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    const handleAddItem = () => {
        if (value.trim()) {
            const newTodo: ITodo = {
                title: value,
                isComplete: false,
                id: uuidv4(),
            };
            setTodos([...todos, newTodo]);
            setValue("");
        }
    };

    const handleComplete = (id: string) => {
        const changedTodos = todos.map(item =>
            item.id === id ? { ...item, isComplete: !item.isComplete } : item
        );

        setTodos(changedTodos);
    };


    const updateQueryParams = (newFilter: 'all' | 'completed' | 'active') => {
        setFilter(newFilter);
        const url = new URL(window.location.href);
        url.searchParams.set('filter', newFilter);
        window.history.pushState({}, '', url);
    };

    const handleFilterCompleted = () => {
        updateQueryParams('completed');
    };

    const handleFilterActive = () => {
        updateQueryParams('active');
    };

    const handleShowAll = () => {
        updateQueryParams('all');
    };

    const hadnleDeleteTodo = (id: string) => {
        const changedTodos = todos.filter((item) => item.id !== id);

        setTodos(changedTodos)
    }

    const filteredTodos = todos.filter(item => {
        if (filter === 'completed') return item.isComplete;
        if (filter === 'active') return !item.isComplete;
        return true;
    });

    return {
        value,
        setValue,
        todos: filteredTodos,
        handleAddItem,
        handleComplete,
        handleFilterCompleted,
        handleFilterActive,
        handleShowAll,
        hadnleDeleteTodo,
        filter
    };
};

export default useTodo;
