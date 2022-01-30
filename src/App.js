import { useState } from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import "./index.css";

function App() {
  let [fnlstp, setFnlStp] = useState([]);

  const addNote = (data) => {
    setFnlStp((pevdata) => {
      return [...pevdata, data];
    })
  }
  return (
      <>
      <Header />
      <CreateNote passNode={addNote}/>

      <div className="abs">
        {
        fnlstp.map((val,index) => {
        return <Note 
        id={index}
        key={index}
        contant={val.contant} 
        title={val.title}
        />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
