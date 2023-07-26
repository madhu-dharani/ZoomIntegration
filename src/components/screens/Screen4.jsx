import Button from "../Button";
import { Card } from "../Card/Card";
import CustomAccordian from "../CustomAccordian";
import { ZoomMeet } from "../ZoomMeet";

const Screen4 = ({ nextHandler }) => {
  return (
    <>
      <ZoomMeet />
      <CustomAccordian accordianTitle={"Accordian1"}>
        <Card className="bg-lime-400">
          <p>Undeciding process</p>
          <p>unDecider shares their confusions - 4 mins</p>
          <p>Accompaniers ask 1 question each (if any) - 2 mins</p>
          <p>UnDecider responds - 4mins</p>
          <p>Accompanier reflects and fills the form - 2 mins</p>
          <p>
            Accompanier paraphrases the confusion and shares <br />
            Imagination options - 2 mins for each accompanier
            <br />
            Undecider shares their takeaways and feelings - 2<br />
            mins
          </p>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Accordian1"}>
        <Card className="bg-yellow-500 bg-green-500">
          <p>Moderator:</p>
          <p>
            say, /"before we move forward lets see the overview of
            <br />
            the conversation process "/
            <br />
            and read out the process given above for everyone.
          </p>
          <p>click</p>
          <Button onClick={nextHandler}>Next</Button>
        </Card>
      </CustomAccordian>
    </>
  );
};
export default Screen4;
