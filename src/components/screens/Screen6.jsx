import Button from "../Button";
import { Card } from "../Card/Card";
import CustomAccordian from "../CustomAccordian";
import { ZoomMeet } from "../ZoomMeet";

const Screen6 = ({ nextHandler }) => {
  return (
    <>
      <ZoomMeet />
      <CustomAccordian accordianTitle={"Accordian1"}>
        <Card className="bg-lime-400">
          <p>Confusion Time</p>
          <p>Timer 2:41</p>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Accordian1"}>
        <Card className="bg-yellow-500 bg-green-500">
          <p>UnDecider:</p>
          <p>
            Tell us about your confusion !<br />
            Please, talk about:
          </p>
          <p>
            1. Choices you rae confused between and their <br />
            pros and cons as per you
          </p>
          <p>
            2. Things you have done so far to resolve the
            <br />
            confusion
          </p>
          <p>
            3. Challenges you faced while resolving it or you
            <br />
            believe you will face
          </p>
          <p>
            4. Impact of the confusion on you and others in <br />
            your life
          </p>
          <Button onClick={nextHandler}>Next</Button>
        </Card>
      </CustomAccordian>
    </>
  );
};
export default Screen6;
