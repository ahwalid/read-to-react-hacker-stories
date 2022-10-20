import * as React  from 'react';
const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    ObjectID:0,
  },{
    title: 'Redux',
    url:  'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    ObjectID:1,
  }
];


const days = ['satarday','sunday', 'monday', 'Tuesday', 'wendsday', 'Thursday','Friday'];


function formatName(user){
    return user.firstName +' '+  user.lastName;
}

const user = {
    firstName: 'Ahmad Walid',
    lastName: 'Ahmadyar'

}

function getGreeting(userName){
  if(userName){
    return <h1>Hello, {userName}</h1>
  } else {
    return <h1>Hello, Stranger</h1>
  }
}

function App(){
  return (
    <div>
        <h1>My Hacker Stories</h1>

        
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />

        <hr />
        <ul>
          {list.map(function(item){
            return(
                <li key={item.ObjectID}>
                  <span>
                    <a href={item.url}>{item.title}</a>
                  </span>
                  <span>{item.author}</span>
                  <span>{item.num_comments}</span>
                  <span>{item.points}</span>
                </li>
            ); 
          })}
        </ul>

        <ol>
          {days.map((day) => <li>{day}</li>)}
        </ol>

          <p>{formatName(user)}</p>
          <hr />

          {getGreeting('Ahmad')}
          {getGreeting()}
    </div>
  );
}

export default App;
