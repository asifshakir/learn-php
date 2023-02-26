import { useState } from 'react';

export default function() {
    const [greeting, setGreeting] = useState('Hello');
    const [person, setPerson] = useState('World');
    return (
      <>
          <h1>{greeting} {person}</h1>

          <hr />

          <input 
            type="text" 
            className="form-control"
            value={greeting}
            onInput={(e) => setGreeting(e.target.value)}  
            />

          <input 
            type="text" 
            className="form-control"
            value={person}
            onInput={(e) => setPerson(e.target.value)}  
            />
      </>
    );
  }