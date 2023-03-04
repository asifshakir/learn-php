import { useState } from 'react'

import Counter from './components/Counter';
import Hello from './components/Hello';
import Todo from './components/Todo';

export default function() {
  const [state, setState] = useState('ShowHello');

  return <>
    <div className="container mt-2">

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Learn React</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a 
                  className={"nav-link" + (state === 'ShowHello' ? ' active' : '')} 
                  onClick={() => setState('ShowHello')}
                  aria-current="page" 
                  href="#">Hello World</a>
              </li>
              <li className="nav-item">
                <a 
                  className={"nav-link" + (state === 'ShowCounter' ? ' active' : '')} 
                  onClick={() => setState('ShowCounter')} 
                  aria-current="page" 
                  href="#">Counter</a>
              </li>
              <li className="nav-item">
                <a 
                  className={"nav-link" + (state === 'ShowTodo' ? ' active' : '')} 
                  onClick={() => setState('ShowTodo')} 
                  aria-current="page" 
                  href="#">ToDo</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-2">
        { state === 'ShowCounter' && <Counter /> }
        { state === 'ShowHello' && <Hello /> }
        { state === 'ShowTodo' && <Todo /> }
      </div>
    </div>
  </>
}
