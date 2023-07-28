import { useContext } from "react";
import Button from "../Button";
import { Card } from "../Card/Card";
import CustomAccordian from "../CustomAccordian";
import { ZoomMeet } from "../ZoomMeet";
import MyContext from "../../context/context";

const Screen15 = ({ nextHandler }) => {
  const { sharedValue, setsharedValue } = useContext(MyContext);
  console.log("sharedValue", sharedValue);
  return (
    <>
      <ZoomMeet />
      <CustomAccordian accordianTitle={"General"}>
        <Card className="bg-lime-400">
          <p>Best valinger for the day</p>
          <p>{sharedValue}</p>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Specific Instructions"}>
        <Card className="bg-yellow-500 bg-green-500">
          <p>Moderator:</p>
          <p>
            `say:Congratualtions {sharedValue} for getting selected as the best <br />
            valinger for the day`
          </p>
          <p>click</p>
          <Button onClick={nextHandler}>Next</Button>
        </Card>
      </CustomAccordian>
    </>
  );
};
export default Screen15;
