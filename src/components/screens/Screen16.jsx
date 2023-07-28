import { useContext, useEffect } from "react";
import Button from "../Button";
import { Card } from "../Card/Card";
import CustomAccordian from "../CustomAccordian";
import { ZoomMeet } from "../ZoomMeet";
import MyContext from "../../context/context";

const Screen16 = ({ nextHandler }) => {
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
            Who gave the most innovative <br />
            Suggestion
          </p>
          <Button onClick={() => updateValue("name1")}>{"{name1}"}</Button>
          <Button onClick={() => updateValue("name2")}>{"{name2}"}</Button>
          <Button onClick={() => updateValue("name3")}>{"{name3}"}</Button>
        </Card>
      </CustomAccordian>

      <CustomAccordian accordianTitle={"Specific Instructions"}>
        <Card className="bg-yellow-500 bg-green-500">
          <p>Moderrator:</p>
          <p>
            say:We have got another question lets think about and
            <br />
            select best innovative suggestion for the {"{undecider}"} in <br />
            today's conversation
          </p>
          <p>please click on a name from the list</p>
        </Card>
      </CustomAccordian>
    </>
  );
};
export default Screen16;
