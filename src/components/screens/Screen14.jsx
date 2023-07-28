import Button from "../Button";
import { useContext, useEffect } from "react";
import { Card } from "../Card/Card";
import CustomAccordian from "../CustomAccordian";
import { ZoomMeet } from "../ZoomMeet";
import MyContext from "../../context/context";

const Screen14 = ({ nextHandler }) => {
  const { sharedValue, setsharedValue } = useContext(MyContext);
  useEffect(() => {
    const interval = setInterval(() => {
      nextHandler();
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  const updateValue = (data) => {
    setsharedValue(data);
  };

  return (
    <>
      <ZoomMeet />
      <CustomAccordian accordianTitle={"General"}>
        <Card className="bg-lime-400">
          <p>
            who was the best valinger for the day
            <br />
            {"("} someone who have challenged and
            <br />
            validated what undecider shared{")"}
          </p>
          <Button onClick={() => updateValue("name1")}>{"{name1}"}</Button>
          <Button onClick={() => updateValue("name2")}>{"{name2}"}</Button>
          <Button onClick={() => updateValue("name3")}>{"{name3}"}</Button>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Specific Instructions"}>
        <Card className="bg-yellow-500 bg-green-500">
          <p>Moderator:</p>
          <p>
            say: we have a question on screen,
            <br />
            lets think about and select best valinger of the <br />
            conversation today{"("}someone who challenged and
            <br />
            validated what UnDecider shared{")"}
          </p>
          <p>please click on the name from the list</p>
        </Card>
      </CustomAccordian>
    </>
  );
};
export default Screen14;
