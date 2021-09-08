// import logo from './logo.svg';
import './App.css';
import data from './contacts.json';
import { useState } from 'react';

const Contacts = () => {
  const [contacts, setContacts] = useState(data);
  return (
    <table>
    <thead>
      <tr>
        <th><h2>Picture</h2></th>
        <th><h2>Name</h2></th>
        <th><h2>Popularity</h2></th>
        <th><h2>Won an Oscar</h2></th>
        <th><h2>Won an Emmy</h2></th>
      </tr>
      <tr>
        <td><img src={contacts[0].pictureUrl} alt=""></img></td>
        <td><h4>{contacts[0].name}</h4></td>
        <td><h4>{contacts[0].popularity}</h4></td>
        <td>{contacts[0].wonOscar && <h4>🏆</h4>}</td>
        <td>{contacts[0].wonEmmy && <h4>🏆</h4>}</td>
      </tr>
      <tr>
        <td><img src={contacts[1].pictureUrl} alt=""></img></td>
        <td><h4>{contacts[1].name}</h4></td>
        <td><h4>{contacts[1].popularity}</h4></td>
        <td>{contacts[1].wonOscar && <h4>🏆</h4>}</td>
        <td>{contacts[1].wonEmmy && <h4>🏆</h4>}</td>
      </tr>
      <tr>
        <td><img src={contacts[2].pictureUrl} alt=""></img></td>
        <td><h4>{contacts[2].name}</h4></td>
        <td><h4>{contacts[2].popularity}</h4></td>
        <td>{contacts[2].wonOscar && <h4>🏆</h4>}</td>
        <td>{contacts[2].wonEmmy && <h4>🏆</h4>}</td>
      </tr>
      <tr>
        <td><img src={contacts[3].pictureUrl} alt=""></img></td>
        <td><h4>{contacts[3].name}</h4></td>
        <td><h4>{contacts[3].popularity}</h4></td>
        <td>{contacts[3].wonOscar && <h4>🏆</h4>}</td>
        <td>{contacts[3].wonEmmy && <h4>🏆</h4>}</td>
      </tr>
      <tr>
        <td><img src={contacts[4].pictureUrl} alt=""></img></td>
        <td><h4>{contacts[4].name}</h4></td>
        <td><h4>{contacts[4].popularity}</h4></td>
        <td>{contacts[4].wonOscar && <h4>🏆</h4>}</td>
        <td>{contacts[4].wonEmmy && <h4>🏆</h4>}</td>
      </tr>
      </thead>
    </table>
  )
}

// const randomContact = () => {
//   let i = Math.floor(Math.random() * data.length);
//   return (

//   )
// }

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      {/* <button onClick={() => randomContact()}>Add Random Contact</button> */}
      <Contacts />
    </div>
  );
}

export default App;
