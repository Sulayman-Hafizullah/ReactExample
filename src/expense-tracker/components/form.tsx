import react, {FormEvent, useRef, useState} from 'react';
import {FieldValue, FieldValues, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {categories} from "../categories";

const schema = z.object({
    description: z.string().min(3, "Description must be at least 3 characters long."),
    amount: z.number({invalid_type_error: 'Price field is required.'}).min(1, "Price must be greater than 1"),
    category: z.enum(categories)
});

type FormData = z.infer<typeof schema>;

interface Props {
    onSubmit: (data: FormData) => void;
}

const Form = ({onSubmit}: Props) => {

    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid}
    } = useForm<FormData>({resolver: zodResolver(schema)});
    console.log(errors);


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
        <form onSubmit={handleSubmit(data => {
            onSubmit(data);
            reset();
        })}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input {...register("description")}
                       id="description"
                       type="text"
                       className="form-control"/>
                {errors.description &&
                    <span className="text-danger">{errors.description.message}</span>}

            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input {...register("amount", {valueAsNumber: true})}
                       id="amount"
                       type="number"
                       className="form-control">
                </input>
                {errors.amount &&
                    <span className="text-danger">{errors.amount.message}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select {...register("category")}
                        id="category"
                        className="form-control">
                    <option value=""> Select a Category</option>
                    {categories.map(category => <option key={category} value={category}>{category}</option>)}
                </select>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Form;