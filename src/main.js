import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)*/
/*problem3
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Project/Shopping Cart/CartReducer';
const countstore=createStore(
reducer
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Provider store={countstore}>
<AppProject></AppProject>
</Provider>
</>
) */

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <App></App>
  </div>
)

