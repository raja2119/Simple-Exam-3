import React, { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthConext";
import { useThemeContext } from "../contexts/ThemeContext";
import { Link, useHistory } from "react-router-dom";
import { Container, Segment } from "semantic-ui-react";
import Base from "./Base";

const HomePage = () => {
  const { questionSets, setExamId } = useAuthContext();
  const { showAlert } = useThemeContext();
  const [questionList, setQuestionList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getQuestionSets();
  }, []);

  const getQuestionSets = async () => {
    try {
      const res = await questionSets();
      console.log(res);
      setQuestionList(res);
    } catch (err) {
      console.log(err);
    }
  };
  //   const createQuestionCard = () => {
  //     return
  return (
    <Base>
      {questionList.map((qs) => (
        <Segment
          key={qs._id}
          onClick={() => {
            setExamId(qs._id);
            localStorage.setItem("examId", qs._id)
            history.push('/exam')
          }}
        >
          <Container>{qs.name}</Container>
        </Segment>
      ))}
    </Base>
  );
};

export default HomePage;
