import React from 'react';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link,
        useParams
} from 'react-router-dom';


const users = [
  {id:1, name:'Alice', gender:'m'},
  {id:2, name:'Brown', gender:'m'},
  {id:3, name:'Catrine', gender:'f'},
  {id:4, name:'Daisy', gender:'f'},
  {id:5, name:'Ella', gender:'f'},
  {id:6, name:'Folorance', gender:'f'},
];

const Male = props => {
  return(
    <ul>
      {
        users.filter(u=>u.gender === 'm').map(u=>
          <li key={u.id}>{u.name}</li>)
      }
    </ul>
  );
}

const Female = props => {
  return(
    <ul>
      {
        users.filter(u=>u.gender === 'f').map(u=>
          <li key={u.id}>{u.name}</li>)
      }
    </ul>
  );
}

//Dynamic URL
const User = props =>{
  const { name } = useParams();   //Getting the value of :name by using useParams() Hook
  return(
    <h1>Hi! This is {name}' Profile.Welcome!</h1>
  )
}
const App = props => {
  return(
    <Router>
      <div>
        <ul>
          <li><Link to="/user/Alice">Alice</Link></li>
          <li><Link to="/user/Bob">Bob</Link></li>
        </ul>
        <div style={{background:'cyan', padding:20}}>
          <Switch>
            <Route path="/user/:name"><User /></Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;