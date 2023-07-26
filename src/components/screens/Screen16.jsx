import Button from "../Button";
import { Card } from "../Card/Card";
import CustomAccordian from "../CustomAccordian";
import { ZoomMeet } from "../ZoomMeet";

const Screen16 = ({ nextHandler }) => {
  return (
    <>
      <ZoomMeet />
      <CustomAccordian accordianTitle={"Accordian1"}>
        <Card className="bg-lime-400">
          <p>Confusion Time</p>
          <p>Timer</p>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Accordian1"}>
        <Card className="bg-yellow-500 bg-green-500">
          <p>Moderrator:</p>
          <p>
            Hi /"name"/ you can share your confusion now, you have <br />4 minutes
          </p>
          <Button onClick={nextHandler}>START TIMER</Button>
          <p>after the sharing click </p>
          <Button>Next</Button>
        </Card>
      </CustomAccordian>
    </>
  );
};
export default Screen16;
