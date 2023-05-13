import React,{useState} from 'react';
import './style.css';
import Questions from './Questions.json'
import Display from './Display'
export default function App() {
  let tempmarks = []
  const [marks,setMarks] = useState([])
const changeHandler =(val,index)=>{
  tempmarks = marks
  tempmarks[index] = val
  setMarks([...tempmarks])
}
  return (
    <div>
      <p>hiiiujjji{marks}</p>
    
{
  Questions.map((questions,index) => { 
    return(<Display changeHandler={changeHandler} questions={questions} index={index}/>)})
}
    <button onClick={() => alert(marks.reduce((a,b) => a+b,0))}>submit</button>
    </div>
  );
}
