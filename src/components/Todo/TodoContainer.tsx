import { FC } from "react";
import TodoAdd from "./TodoAdd/TodoAdd";
import TodoList from "./TodoList/TodoList";

const TodoContainer: FC = () => {
    return (
        <>
            <TodoAdd />
            <TodoList />
        </>
    );
};

export default TodoContainer;
