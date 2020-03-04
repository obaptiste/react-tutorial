import React, {useState} from "react";
import FunkyCount from '../components/FunkyCount';
import '../about.css';
export default function About(props) {
  const  [name, setName] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${name}`)
  } 
  return (

  <div>  
      <FunkyCount />
  </div>
  )
}