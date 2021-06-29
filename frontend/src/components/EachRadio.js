import React, { useState, useEffect } from "react";
import api from "../api/simpleExamBackend";
import {
  Button,
  Form,
  Radio,
  Grid,
  Header,
  Segment,
  Message,
} from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthConext";
import { useThemeContext } from "../contexts/ThemeContext";

const EachRadio = ({ data }) => {
    const [color, setColor ] = useState("")
    const [isAnswered, setIsAnswered ] = useState(false)
    const [isRight, setIsRight ] = useState(false)
    const {marks, setMarks} = useAuthContext()
  console.log(data);
  const onRadioChange = (e,{value}) => {
      console.log(value);
    if(value===data.answerId){
        setColor("green")
        setIsAnswered(true)
        setIsRight(true);
        setMarks(prevMarks => {
            return prevMarks+1
        })
    }else{
        setColor("red")
        setIsAnswered(true)
        setIsRight(false);


    }
  }
  return (
    <div >
      <Segment>
        question : <strong>{data.body}</strong>
        &nbsp;
        &nbsp;
        &nbsp;
        <Radio
          label={data.options[0].optionBody}
          name={data.options[0].optionBody}
          value={data.options[0]._id}
          onChange={onRadioChange}
          style={{backgroundColor:`${color}`}}
          disabled={isAnswered}
        />
        &nbsp;
        &nbsp;
        <Radio
          label={data.options[1].optionBody}
          name={data.options[1].optionBody}
          value={data.options[1]._id}
          style={{backgroundColor:`${color}`}}
          onChange={onRadioChange}

          disabled={isAnswered}
        />
        &nbsp;
        &nbsp;
        <Radio
          label={data.options[2].optionBody}
          name={data.options[2].optionBody}
          value={data.options[2]._id}
          style={{backgroundColor:`${color}`}}
          onChange={onRadioChange}

          disabled={isAnswered}

        />
        &nbsp;
        &nbsp;
        <Radio
          label={data.options[3].optionBody}
          name={data.options[3].optionBody}
          value={data.options[3]._id}
          style={{backgroundColor:`${color}`}}
          onChange={onRadioChange}

          disabled={isAnswered}

        />
        &nbsp;
        &nbsp;
        {!isRight && isAnswered && (<>correct answer is<strong>{data.answerId}</strong></>)}
        
      </Segment>


      
    </div>
  );
};

export default EachRadio;
