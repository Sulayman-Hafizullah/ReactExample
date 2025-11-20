import React, {useState} from 'react';
import styles from "./Like.module.css"
import {FaHeart} from "react-icons/fa";

interface Props {
    onClick: () => void;
}


const Like = ({onClick}: Props) => {
    const [liked, setLiked] = useState(false)

    const toggle = () => {
        setLiked(!liked);
        onClick();
    }
    return <FaHeart className={[styles.like, liked ? styles.active : styles.inactive].join(' ')} onClick={toggle}/>
};

export default Like;