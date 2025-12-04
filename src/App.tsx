import ListGroup from "./components/ListGroup/ListGroup";
import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import Like from "./components/Like/Like"
import alert from "./components/Alert";
import {useState} from "react";
import {FaCalendarAlt} from "react-icons/fa";
import ExpandableText from "./components/ExpandableText";
import Form from "./expense-tracker/components/form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

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

    const [cart, setCart] = useState({
        discount: 0.1,
        items: [
            {id: 1, title: 'Product 1', quantity: 1},
            {id: 2, title: 'Product 2', quantity: 1}
        ]
    })
    const [expenses, setExpenses] = useState([{id: 1, description: 'asdf', amount: 400, category: 'Groceries'},
        {id: 2, description: 'bbb', amount: 400, category: 'Groceries'},
        {id: 3, description: 'ccc', amount: 400, category: 'Groceries'},
        {id: 4, description: 'ddd', amount: 400, category: 'Groceries'}]);

    const [maxChars, setMaxChars] = useState(false);
    const [ExpandableTextBtn, setExpandableTextBtn] = useState(false);

    const handleClick = () => {
        //setGame({...game, player: {...game.player, name: "Jane"}});
        //setPizza({...pizza, toppings: [...pizza.toppings, 'Pepperoni']});
        // setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: 2} : item)})
        setMaxChars(!maxChars);
        setExpandableTextBtn(!ExpandableTextBtn);

    }

    const expandedBtn = ExpandableTextBtn ? 'Less' : 'More';
    const charNumber = maxChars ? 100 : 10;


    return (
        <>
            <Form/>
            <ExpenseList expenses={expenses}
                         onDelete={(id) => setExpenses(expenses.filter(expense => expense.id !== id))}/>
            <ExpandableText maxChars={charNumber}
            > adsfjklbadsfb asd asdklfjb asdf asldkbfj asldkbf </ExpandableText>
            {/*<button onClick={handleClick}>{expandedBtn}</button>*/}
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