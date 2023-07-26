import Button from "../Button";
import { Card } from "../Card/Card";
import CustomAccordian from "../CustomAccordian";
import { ZoomMeet } from "../ZoomMeet";

const Screen8 = ({ nextHandler }) => {
  return (
    <>
      <ZoomMeet />
      <CustomAccordian accordianTitle={"Accordian1"}>
        <Card className="bg-lime-400">
          <p>Response Time</p>
          <p>Timer 4:00min</p>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Accordian1"}>
        <Card className="bg-yellow-500 bg-green-500">
          <p>Moderator:</p>
          <p>
            Say:Thank you so much for the questions, now lets
            <br />
            hear back from ""Undecider/""
          </p>
          <Button>START TIMER</Button>
          <p>after the sharing click </p>
          <Button onClick={nextHandler}>Next</Button>
        </Card>
      </CustomAccordian>
    </>
  );
};
export default Screen8;
