import logo from '../logo.svg';
import '../App.css';
import Greet from './Greet';
import Message from './Message'; 
import Button from './Button';
import Hello from './Hello';
import Employee from './Employee';


function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src="https://www.freeiconspng.com/thumbs/pokeball-png/pokeball-transparent-png-2.png"className="App-logo" alt="logo" />
        <p>
            Kapag binasa mo 'to, ibig sabihin mahal ka ng mga magulang mo
        </p>
        <p>{Hello}</p>
        <Greet name="Baccla" positionName = "Center">
          <Message/>
          </Greet>
          <Greet name="Marecakes" positionName = "Lead Rapper">
        <Button/>
        </Greet>
        <Greet name= "Brozkie" positionName = "Lead Vocal"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
