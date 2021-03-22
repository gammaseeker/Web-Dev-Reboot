import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Money from './components/Money';
import './App.css';
import penny from './images/penny.png';
import nickels from './images/nickel.png';
import dime from './images/dime.png';
import quarter from './images/quarter.png';
import bill from './images/bill.png';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Money moneyType='Pennies' imgString={penny}></Money>
      <Money moneyType='Nickels' imgString={nickels}></Money>
      <Money moneyType='Dimes' imgString={dime}></Money>
      <Money moneyType='Quarters' imgString={quarter}></Money>
      <Money moneyType='Dollars' imgString={bill}></Money>
    </div>
  );
}

export default App;
