import React from "react";
import { Card } from "../Card/Card";
import Button from "../Button";
import CustomAccordian from "../CustomAccordian";
import { ZoomMeet } from "../ZoomMeet";

const Screen3 = ({ nextHandler }) => {
  return (
    <>
      <ZoomMeet />
      <CustomAccordian accordianTitle={"General"}>
        <Card className="bg-lime-400">
          <p>
            Thank you all for sharing about
            <br /> yourself, before we move forward in
            <br /> the conversation lets establish some
            <br />
            ground rules:
          </p>
          <p>
            -What happens in /'Undecide'/ stays <br />
            in Undecide
            <br />
            -be cusiously empathetic
            <br />
            -Feel free to express gratitude, when you feel
          </p>
          <p>
            If at any point session, you feel
            <br />
            uncomfortable, we encourage you to <br />
            press SOS button on the top right of
            <br />
            your screen
          </p>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Specific Instructions"}>
        <Card className="bg-yellow-500 bg-green-500">
          <p>Moderator:</p>
          <p>
            Please read the instructions above for
            <br />
            everyone, ask everyone whether they <br />
            are clear about these instructions,
            <br />
            ensure that everyone click on
          </p>
          <Button onClick={nextHandler}>I AGREE</Button>
          <p>on their respective screen</p>
        </Card>{" "}
      </CustomAccordian>
    </>
  );
};

export default Screen3;
