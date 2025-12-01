import ListGroup from "./components/ListGroup/ListGroup";
import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import Like from "./components/Like/Like"
import alert from "./components/Alert";
import {useState} from "react";
import {FaCalendarAlt} from "react-icons/fa";

interface Props {
    buttonText: string;
}

function App() {
    let items = ["Tokyo",
        "Chicago",
        "New York",
        "London",
        "Paris"];

    const handleSelectCity = (city: string) => {
        console.log(city);
    }

    const [showAlert, setShowAlert] = useState(false);

    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "John",
        },
    });

    const [pizza, setPizza] = useState({
        name: 'Spicy Pepperoni',
        toppings: ['Mushrooms']
    });

    const handleClick = () => {
        //setGame({...game, player: {...game.player, name: "Jane"}});
        setPizza({...pizza, toppings: [...pizza.toppings, 'Pepperoni']});
    }


    return (
        <>
            <Like onClick={() => {
                console.log("Clicked");
            }}/>
            <FaCalendarAlt color={"red"} size={"40"}/>
            <div><ListGroup cities={items} header={"Cities"} onSelectCity={handleSelectCity}/>
            </div>
            {showAlert && <Alert children={"Button Clicked"} onClose={() => setShowAlert(false)}/>}
            <Button onClick={() => setShowAlert(true)}>My Button</Button>

        </>
    );
}

export default App;