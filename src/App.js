import React from 'react';
import './App.css';
import Forms from './Standard Form/form';
import Formikform from './Formik Form/formikform';
import Hookform from './Hook Form/hookform'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h5>FORMS</h5>
        <div className='row mt-2'>
          <div className='col-md-4 border py-3'>
             <Forms/>
            </div>
            <div className='col-md-4 border py-3'>
            <Formikform/>
            </div>
            <div className='col-md-4 border py-3'>
           <Hookform/>
          </div>
          </div>
    </div>
    </div>
  );
}

export default App;
