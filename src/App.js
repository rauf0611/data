import React from 'react';
import Select from 'react-select';
import Users from './components/Users';
import Todos from './components/Todos';

import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => (
  <div className="container">
    <div className='row'>
      <div className='col-md-6 mx-auto'>
        <Users />
        <Todos />
      </div>
    </div>

  </div>
);

export default App