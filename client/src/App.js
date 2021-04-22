import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron'


function App() {

    return (
        <div className="App">
            <header className="App-header">
                <Jumbotron>
                    <h1>Bem Vindo</h1>
                    <p>Crud simples com React + Postgres</p>
                </Jumbotron>
            </header>
        </div>
    )
}

export default App;
