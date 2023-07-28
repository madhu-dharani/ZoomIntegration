import { useContext } from "react";
import MyContext from "../../context/context";
import Button from "../Button";
import { Card } from "../Card/Card";
import CustomAccordian from "../CustomAccordian";
import { ZoomMeet } from "../ZoomMeet";

const Screen17 = ({ nextHandler }) => {
  const { sharedValue, setSharedValue } = useContext(MyContext);
  console.log("shared from 17", sharedValue);
  return (
    <>
      <ZoomMeet />
      <CustomAccordian accordianTitle={"General"}>
        <Card className="bg-lime-400">
          <p>Best Innovative suggestion for the day</p>
          <p>{sharedValue}</p>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Specific Instructions"}>
        <Card className="bg-yellow-500 bg-green-500">
          <p>Moderrator:</p>
          <p>
            `say:Congratualtions {sharedValue} for getting selected as the best <br />
            innovative suggestion for the day`
          </p>
          <p>click</p>
          <Button onClick={nextHandler}>Next</Button>
        </Card>
      </CustomAccordian>
    </>
  );
};
export default Screen17;
