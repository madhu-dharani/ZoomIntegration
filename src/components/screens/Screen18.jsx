import Button from "../Button";
import { Card } from "../Card/Card";
import CustomAccordian from "../CustomAccordian";
import { ZoomMeet } from "../ZoomMeet";

const Screen18 = ({ nextHandler }) => {
  return (
    <>
      <ZoomMeet />
      <CustomAccordian accordianTitle={"General"}>
        <Card className="bg-lime-400">
          <p>Thank You</p>
          <p>{"{picture}"}</p>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Specific Instructions"}>
        <Card className="bg-yellow-500 bg-green-500">
          <p>Moderrator:</p>
          <p>
            Thank you all for your time and the wonderful
            <br />
            conversation. please submit your feedbacks through
            <br />
            whatsApp later today in whatsApp
          </p>
          <p>
            {"("}please add some final words if you want <br />
            really appreciate your intiative and energy as a<br />
            moderator , see you{")"}
          </p>
          <p>click on the close button</p>
          <Button onClick={nextHandler}>Close</Button>
        </Card>
      </CustomAccordian>
    </>
  );
};
export default Screen18;
