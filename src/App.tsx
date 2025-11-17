import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";
import alert from "./components/Alert";
import {useState} from "react";

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

    return (
        <>
            <div><ListGroup cities={items} header={"Cities"} onSelectCity={handleSelectCity} buttonText={"Cool Stuff"}/>
            </div>
            {showAlert && <Alert children={"Button Clicked"} onClose={() => setShowAlert(false)}/>}
            <Button onClick={() => setShowAlert(true)}>My Button</Button>

        </>
    );
}

export default App;