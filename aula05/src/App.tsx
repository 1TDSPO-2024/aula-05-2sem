import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App(){

  const title : string = "My Page";
  const status = "loading";

  const [pageNum, setPageNum] = useState(0);

  const myAlert = () => {
    setPageNum(pageNum + 1);
    console.log("This Function Was Executed: ", title);
  }

  return (
    <>
      <Header title={title} func={myAlert} pageNum={pageNum} status={status}>
        <h4>Children</h4>
      </Header>
      <Footer></Footer>
    </>
  );
}