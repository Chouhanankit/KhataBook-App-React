import React from 'react'
import Navbar from './components/Navbar';
import AccountSection from './components/AccountSection';
import ListGroup from './components/ListGroup';
import { ExpenseProvider } from './context/ExpenseContext';
import BalanceSection from './components/BalanceSection';

function App() {
  return (


    <ExpenseProvider>
      <Navbar />
      <div className='conatiner p-5 bg-secondary'>
        <BalanceSection/>
        <AccountSection />

        <ListGroup />
      </div>
    </ExpenseProvider>
  );
};

export default App