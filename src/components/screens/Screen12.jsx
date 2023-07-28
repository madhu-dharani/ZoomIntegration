import { useState } from "react";
import Button from "../Button";
import { Card } from "../Card/Card";
import CustomAccordian from "../CustomAccordian";
import StartButton from "../StarButton";
import CountdownTimer from "../Timer";
import { ZoomMeet } from "../ZoomMeet";

const Screen12 = ({ nextHandler }) => {
  const [startTimer, setStartTimer] = useState(false);

  const handleStartTimer = () => {
    setStartTimer(true);
  };
  return (
    <>
      <ZoomMeet />
      <CustomAccordian accordianTitle={"General"}>
        <Card className="bg-lime-400">
          <p>/"UnDecider/"" please share your takeaways</p>
          <p>
            <CountdownTimer initialTimeInSeconds={120} startTimer={startTimer} />
          </p>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Specific Instructions "}>
        <Card className="bg-yellow-500 bg-green-500">
          <p>Moderrator:</p>
          <p>
            say:Thank you all now let's hear from ""/UnDecider/"" about takeaways from <br />
            the conversation
          </p>
          <StartButton onStartClick={handleStartTimer} />
          <p>after the sharing click </p>
          <Button onClick={nextHandler}>Next</Button>
        </Card>
      </CustomAccordian>
    </>
  );
};
export default Screen12;
