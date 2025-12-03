import react, {FormEvent, useRef, useState} from 'react';
import {FieldValue, FieldValues, useForm} from "react-hook-form";

const Form = () => {

    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const person = {name: "", age: 0};
    const [person1, setPerson1] = useState({
        name: "", age: ''
    })
    const {register, handleSubmit} = useForm();

    const onSubmit = (data: FieldValues) => console.log(data);

    // const handleSubmit = (event: FormEvent) => {
    //     event.preventDefault()
    //     if (nameRef.current !== null) {
    //         person.name = nameRef.current.value;
    //     }
    //     if (ageRef.current !== null) {
    //         person.age = parseInt(ageRef.current.value);
    //     }
    //     console.log(person1);
    // }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input {...register("name")}
                       id="name"
                       type="text"
                       className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input {...register("age")}
                       id="age"
                       type="number"
                       className="form-control"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form;