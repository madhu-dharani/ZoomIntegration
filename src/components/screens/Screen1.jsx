import Button from "../Button";
import { Card } from "../Card/Card";

const Screen1 = ({ nextHandler }) => {
  return (
    <>
      <Card className="bg-lime-400">
        <p>hi</p>
        <p>welcome to the undecide conversation</p>
        <p>we will connect in few minutes</p>
      </Card>

      <Card className="bg-yellow-500 bg-green-500">
        <p>Moderator:</p>
        <p>Hi Name</p>
        <p>
          Thanks for volunteering to be the <br />
          moderator of the session.
        </p>
        <p>
          We are expecting 4 people in today's
          <br />
          session Undecider - name <br />
          Accomapniers
        </p>
        <p>Please click on</p>
        <Button onClick={nextHandler}>START THE SESSION</Button>
        <p>
          as soon as you have <br />
          unDecider and one more accompanier
          <br />
          in the room with you.
        </p>
      </Card>
    </>
  );
};
export default Screen1;
