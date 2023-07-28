import { useState } from "react";
import Button from "../Button";
import { Card } from "../Card/Card";
import CustomAccordian from "../CustomAccordian";
import { ZoomMeet } from "../ZoomMeet";
import StartButton from "../StarButton";
import CountdownTimer from "../Timer";
const Screen5 = ({ nextHandler }) => {
  const [startTimer, setStartTimer] = useState(false);

  const handleStartTimer = () => {
    setStartTimer(true);
  };
  return (
    <>
      <ZoomMeet />
      <CustomAccordian accordianTitle={"Specific Instructions"}>
        <Card className="bg-lime-400">
          <p>Confusion Time</p>
          <div>
            <CountdownTimer initialTimeInSeconds={240} startTimer={startTimer} />
          </div>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Specific Instructions"}>
        <Card className="bg-yellow-500 bg-green-500">
          <p>Moderator:</p>
          <p>
            Hi /"name"/ you can share your confusion now, you have <br />4 minutes
          </p>
          <StartButton onStartClick={handleStartTimer} />
          <p>after the sharing click </p>
          <Button onClick={nextHandler}>Next</Button>
        </Card>
      </CustomAccordian>
    </>
  );
};
export default Screen5;
