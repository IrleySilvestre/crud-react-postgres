import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import ListBancos from "./components/listBancos/ListBancos";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <Jumbotron>
                    <h1>Bem Vindo</h1>
                    <p>Crud simples com React + Postgres</p>
                </Jumbotron>
            </header>
            <ListBancos/>

        </div>
    )
}

export default App;
