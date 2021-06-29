import React, { useEffect, useState } from "react";
import api from "../api/simpleExamBackend";
import {
  Button,
  Form,
  Grid,
  Modal,
  Header,
  Segment,
  Message,
  Radio,
} from "semantic-ui-react";
import EachRadio from "./EachRadio";
import { Link, useHistory } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthConext";
import { useThemeContext } from "../contexts/ThemeContext";
import Base from "./Base";

const Exam = () => {
  const [questions, setQuestions] = useState([]);
  const [examList, setExamList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const { examId, marks, setMarks } = useAuthContext();
  const { showAlert } = useThemeContext();
  const history = useHistory();
  const examIdLocal = localStorage.getItem("examId");

  const handleFinish = () => {
    setOpenModal(true);
  };

  const getQuestions = async () => {
    try {
        let fId;
        if(examId){
            fId=examId;
        }else{
            fId=examIdLocal
        }
      const res = await api.get(`/questions-sets/${fId}`);
      console.log(res.data);
      setQuestions((prevData) => {
        makeExam(res.data.data);
        return res.data.questions;
      });
    } catch (err) {
      console.log(err);
    }
  };
  const makeExam = (questions) => {
    const finalList = questions.map((qs) => {
      return (
        <div>
          <br />
          <EachRadio data={qs} />
          <br />
        </div>
      );
    });

    console.log(questions);

    setExamList(finalList);
  };

 
  useEffect(() => {

    getQuestions();
    setMarks(0);
  }, []);
  return (
    <Base>
      {examList}

      <Button onClick={handleFinish}>Finish</Button>

      <Modal
        onClose={() => setOpenModal(false)}
        onOpen={() => setOpenModal(true)}
        open={openModal}
      >
        <Modal.Header>Thank you!</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>Thanks for attempting the exam</Header>
            <p>Your total marks is {marks}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          {/* <Button color='black' onClick={() => setOpenModal(false)}>
          Nope
        </Button> */}
          <Button
            content="Done"
            labelPosition="right"
            icon="checkmark"
            onClick={() => {
              setOpenModal(false);
              setMarks(0)
              localStorage.removeItem("examId");
              history.push("/");
            }}
            positive
          />
        </Modal.Actions>
      </Modal>
    </Base>
  );
};

export default Exam;
