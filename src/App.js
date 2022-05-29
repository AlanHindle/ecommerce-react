
import './App.css';
import Counter from './components/Counter/Counter';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
    const valor = 1

    const increment = () => {
        console.log('sumar', valor)
    }

    return ( <div className = "App">
        <NavBar />
        <ItemListContainer greeting="Hola JMI"/>
        <header className = "App-header">
        
        <p>
        Ecommerce JMI
        </p> 
        <a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Ver cursos </a> 
        </header> 

        <Counter initial={0} stock={5} title='Contador' handleIncrement = {increment} />
        </div>
    );
}

export default App;