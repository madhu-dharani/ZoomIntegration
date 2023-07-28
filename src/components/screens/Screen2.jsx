import Button from "../Button";
import { Card } from "../Card/Card";
import CustomAccordian from "../CustomAccordian";
import { ZoomMeet } from "../ZoomMeet";

const Screen2 = ({ nextHandler }) => {
  return (
    <>
      <ZoomMeet />
      <CustomAccordian accordianTitle={"General"}>
        <Card className="bg-lime-400">
          <p>
            Hi everyone,
            <br />I am name and I will your <br />
            moderator for today's conversation.
          </p>
          <p>
            We will be spending 30-45 mins <br />
            together today discussing and adding <br />
            to /*names*/ confusion. Let's starts
            <br />
            by getting to know everyone in the
            <br />
            room.
          </p>
          <p>
            Please take turns to share with each
            <br />
            other- Your Name, where you are <br />
            joining from and what are you looking
            <br />
            froward to today?
          </p>
          <p>Let's begin!!!</p>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Specific Instructions"}>
        <Card className="bg-yellow-500 bg-green-500">
          <p>Moderator:</p>
          <p>Ensure everyone has shared</p>
          <p>Once everyone has shared, click on</p>
          <Button onClick={nextHandler}>Next</Button>
        </Card>
      </CustomAccordian>
    </>
  );
};
export default Screen2;
