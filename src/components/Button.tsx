import React from 'react';
import App from "../App";

interface Props {
    children: string;
    onClick: () => void;
    color?: "primary" | "secondary" | "success" | "danger";
}

const Button = ({children, onClick, color = "primary"}: Props) => {

    return <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
};

export default Button;