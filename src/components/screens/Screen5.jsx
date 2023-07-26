import Button from "../Button";
import { Card } from "../Card/Card";
import CustomAccordian from "../CustomAccordian";
import { ZoomMeet } from "../ZoomMeet";
const Screen5 = ({ nextHandler }) => {
  return (
    <>
      <ZoomMeet />
      <CustomAccordian accordianTitle={"Accordian1"}>
        <Card className="bg-lime-400">
          <p>Confusion Time</p>
          <p>Timer 4:00</p>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Accordian1"}>
        <Card className="bg-yellow-500 bg-green-500">
          <p>Moderator:</p>
          <p>
            Hi /"name"/ you can share your confusion now, you have <br />4 minutes
          </p>
          <Button>START TIMER</Button>
          <p>after the sharing click </p>
          <Button onClick={nextHandler}>Next</Button>
        </Card>
      </CustomAccordian>
    </>
  );
};
export default Screen5;
