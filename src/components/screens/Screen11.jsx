import { useState } from "react";
import Button from "../Button";
import { Card } from "../Card/Card";
import CustomAccordian from "../CustomAccordian";
import { ZoomMeet } from "../ZoomMeet";
import CountdownTimer from "../Timer";
import StartButton from "../StarButton";

const Screen11 = ({ nextHandler }) => {
  const [startTimer, setStartTimer] = useState(false);

  const handleStartTimer = () => {
    setStartTimer(true);
  };
  return (
    <>
      <ZoomMeet />
      <CustomAccordian accordianTitle={"General"}>
        <Card className="bg-lime-400">
          <p>
            <CountdownTimer initialTimeInSeconds={120} startTimer={startTimer} />
          </p>
          <p>Let's reflect</p>
          <p>
            1. What do you think is the confusion the
            <br />
            Undecider is dealing with?
          </p>
          <p>2. Why is the confusion important for them?</p>
          <p>
            3. Have you ever exeprienced a similar
            <br />
            confusion? if yes, what was it and what did <br />
            you do about it?
          </p>
          <p>
            4.What could be the 2 imaginative and
            <br />
            and relavant options/possibilities for her to
            <br />
            reslove this confusion and why?
          </p>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Specific Instructions"}>
        <Card className="bg-yellow-500 bg-green-500">
          <p>Moderator:</p>
          <p>
            say:Thank you "/"Accompanier/"". now lets hear
            <br />
            from the next person
          </p>
          <StartButton onStartClick={handleStartTimer} />
          <span>-accompanier 3</span>
          <p>after sharing click</p>
          <Button onClick={nextHandler}>Next</Button>
        </Card>
      </CustomAccordian>
    </>
  );
};
export default Screen11;
