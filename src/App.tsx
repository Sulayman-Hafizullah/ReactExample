import ListGroup from "./components/ListGroup/ListGroup";
import Button from "./components/Button/Button";
import Alert from "./components/Alert";
import Like from "./components/Like/Like"
import alert from "./components/Alert";
import {useEffect, useState} from "react";
import {FaCalendarAlt} from "react-icons/fa";
import ExpandableText from "./components/ExpandableText";
import Form from "./expense-tracker/components/form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import axios from "axios";

interface Props {
    buttonText: string;
}

interface User {
    id: number;
    name: string;
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

    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const controller = new AbortController();
        // get-> await promise -> res / err
        setIsLoading(true);
        axios.get<User[]>('https://jsonplaceholder.typicode.com/users', {signal: controller.signal})
            .then(response => {
                setIsLoading(false);
                setUsers(response.data)
            })
            .catch(err => {
                if (axios.isCancel(err)) return;
                setError(err.message)
                setIsLoading(false);
            });

        return () => controller.abort();
    }, [])

    console.log(users);

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
    const [category, setCategory] = useState("")

    const handleClick = () => {
        //setGame({...game, player: {...game.player, name: "Jane"}});
        //setPizza({...pizza, toppings: [...pizza.toppings, 'Pepperoni']});
        // setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: 2} : item)})
        setMaxChars(!maxChars);
        setExpandableTextBtn(!ExpandableTextBtn);

    }

    const expandedBtn = ExpandableTextBtn ? 'Less' : 'More';
    const charNumber = maxChars ? 100 : 10;
    const filteredExpenses = category ? expenses.filter(e => e.category === category) : expenses;


    const deleteUser = (user: User) => {
        const originalUsers = [...users];
        setUsers(users.filter(u => u.id !== user.id))
        axios.delete(`https://jsonplaceholder.typicode.com/users/` + user.id)
            .catch(err => {
                setUsers(originalUsers);
                setError(err.message)
            });
    }
    const addUser = () => {
        const originalUsers = [...users];
        const newUser = {id: 0, name: "Sulayman"};
        setUsers([...users, newUser]);

        axios.post('https://jsonplaceholder.typicode.com/users', newUser)
            .then(response => {
                setUsers([response.data, ...users])
            })
            .catch(err => {
                setError(err.message)
                setUsers(originalUsers);
            });
    }

    return (
        <>
            {error && <p>{error}</p>}
            {isLoading && <div className="spinner-border"></div>}
            <button className="btn btn-primary mb-3" onClick={() => addUser()}>Add</button>
            <ul className="list-group">
                {users.map(user => <li className={"list-group-item d-flex justify-content-between"}
                                       key={user.id}>{user.name}
                    <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
                </li>)}
            </ul>
            <div className="mb-5">
                <Form onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
            </div>

            <div className="mb-3">
                <ExpenseFilter onSelectCategory={category => setCategory(category)}></ExpenseFilter>
            </div>
            <ExpenseList expenses={filteredExpenses}
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