import {useState} from "react";
import "./ListGroup.css";
import styled from "styled-components";

interface ListItemProps {
    active: boolean;
}

const List = styled.ul`
    list-style: none;
    padding: 0;
`

const ListItem = styled.li<ListItemProps>`
    padding: 5px 0;
    background: ${props => props.active ? "blue" : "none"};
`

interface Props {
    cities: string[];
    header: string;
    onSelectCity: ((city: string) => void);
    buttonText: string;
}

function ListGroup({cities, header, onSelectCity, buttonText}: Props) {


    const [selectedIndex, setSelectedIndex] = useState(-1);
    //event handler

    return (
        <>
            <button type="button" className="btn btn-primary">{buttonText}</button>
            <h1>{header}</h1>
            {cities.length === 0 && <p>No items found</p>}
            <List>
                {cities.map((city, index) => (
                    <ListItem
                        active={index === selectedIndex}
                        key={city}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectCity(city);
                        }}
                    >
                        {city}
                    </ListItem>
                ))}
            </List>
        </>
    );

}

export default ListGroup;