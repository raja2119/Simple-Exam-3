import React from "react";
import { Grid } from "semantic-ui-react";
import Navbar from "./Navbar";
import "react-toastify/dist/ReactToastify.css";

const Base = ({ children }) => {
  return (
    <div className="base">
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Navbar />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={15}> {children}</Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Base;
