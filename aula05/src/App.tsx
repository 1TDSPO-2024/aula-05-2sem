import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App(){
  
  const title : string = "My Page";
  const myAlert = () => {
    alert(title);
  }

  return (
    <>
      <Header title={title} func={myAlert}></Header>
      <Footer></Footer>
    </>
  );
}