import React from 'react';

interface Props {
    children: string;
    onClose?: () => void;
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | undefined;
}

const Alert = ({children, onClose, color = "danger"}: Props) => {

    return (
        <div className={"alert alert-" + color + " alert-dismissible fade show"} role="alert">
            {children}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                    onClick={onClose}></button>
        </div>
    );
}

export default Alert;