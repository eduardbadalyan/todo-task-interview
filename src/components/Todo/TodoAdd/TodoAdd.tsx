import { FC } from "react";
import { useFormik } from "formik";

const TodoAdd: FC = () => {
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            deadline: null,
        },
    });

    return <p>Add</p>;
};

export default TodoAdd;
