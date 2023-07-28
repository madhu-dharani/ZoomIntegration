import { useState } from "react";
import Button from "../Button";
import { Card } from "../Card/Card";
import CustomAccordian from "../CustomAccordian";
import StartButton from "../StarButton";
import CountdownTimer from "../Timer";
import { ZoomMeet } from "../ZoomMeet";

const Screen7 = ({ nextHandler }) => {
  const [startTimer, setStartTimer] = useState(false);

  const handleStartTimer = () => {
    setStartTimer(true);
  };
  return (
    <>
      <ZoomMeet />
      <CustomAccordian accordianTitle={"General"}>
        <Card className="bg-lime-400">
          <p>Question time</p>
          <p>
            <CountdownTimer initialTimeInSeconds={120} startTimer={startTimer} />
          </p>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Specific Instructions"}>
        <Card className="bg-yellow-500 bg-green-500">
          <p>Moderrator:</p>
          <p>
            Say: Hi "/"name/"" thank you for sharing the confusion
            <br />
            This is the time for accompaniers to ask questions. <br />
            Let's Keep the questions short and clear, you can also <br />
            write the question in chatbox so that "\"unDecider\""
            <br />
            does not miss them.
          </p>
          <StartButton onStartClick={handleStartTimer} />
          <p>
            after the questions has been asked, click
            <br />
          </p>
          <Button onClick={nextHandler}>Next</Button>
          <p>
            Don't forget to any clarification question with <br />
            UnDecider that you might have
          </p>
        </Card>
      </CustomAccordian>
    </>
  );
};
export default Screen7;
