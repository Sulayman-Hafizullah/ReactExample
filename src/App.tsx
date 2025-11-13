import ListGroup from "./components/ListGroup";

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

    return <div><ListGroup cities={items} header={"Cities"} onSelectCity={handleSelectCity} buttonText={"Cool Stuff"}/>
    </div>;
}

export default App;