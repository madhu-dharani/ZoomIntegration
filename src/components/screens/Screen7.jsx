import Button from "../Button";
import { Card } from "../Card/Card";
import CustomAccordian from "../CustomAccordian";
import { ZoomMeet } from "../ZoomMeet";

const Screen7 = ({ nextHandler }) => {
  return (
    <>
      <ZoomMeet />
      <CustomAccordian accordianTitle={"Accordian1"}>
        <Card className="bg-lime-400">
          <p>Question time</p>
          <p>Timer 2:00</p>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Accordian1"}>
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
          <Button>START TIMER</Button>
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
