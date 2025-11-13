import {useState} from "react";

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
            <ul className="list-group">
                {cities.map((city, index) => (
                    <li
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={city}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectCity(city);
                        }}
                    >
                        {city}
                    </li>
                ))}
            </ul>
        </>
    );

}

export default ListGroup;