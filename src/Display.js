import React from 'react'

const Display = ({questions,index,changeHandler}) => {
  const handler = (e) => {
let temp = questions.answer === e.target.value ? 1 : 0
changeHandler(temp,index)
  }
  return(
    <div>
<h4>{questions.title}</h4>

<div onChange={handler}>
<input type="radio" value="A" name={index} />{questions.options[0]}
<input type="radio" value="B" name={index}/>{questions.options[1]}
<input type="radio" value="C" name={index}/>{questions.options[2]}
<input type="radio" value="D" name={index}name="question1"/>{questions.options[3]}
</div>
    </div>
  )
}

export default Display