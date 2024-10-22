export interface ITodo {
    title: string;
    isComplete: boolean;
    id:string,
}

export interface TodoFormProps {
    handleAddItem: () => void;
    value: string;
    setValue: (value: string) => void;
}

