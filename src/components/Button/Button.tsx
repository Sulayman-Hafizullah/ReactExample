import React from 'react';
import App from "../../App";
import styles from "./Button.module.css"

interface Props {
    children: string;
    onClick: () => void;
    color?: "primary" | "secondary" | "success" | "danger";
}

const Button = ({children, onClick, color = "primary"}: Props) => {

    return <button className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>{children}</button>
};

export default Button;