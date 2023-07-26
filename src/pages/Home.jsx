import { ZoomMeet } from "../components/ZoomMeet";
import React from "react";
import useTraverse from "../hooks/useTraverse";
// import useTraverse from "../hooks/useTraverse";
import Screen1 from "../components/screens/Screen1";
import Screen2 from "../components/screens/Screen2";
import Screen3 from "../components/screens/Screen3";
import Screen4 from "../components/screens/Screen4";
import Screen5 from "../components/screens/Screen5";
import Screen6 from "../components/screens/Screen6";
import Screen7 from "../components/screens/Screen7";
import Screen8 from "../components/screens/Screen8";
import Screen9 from "../components/screens/Screen9";
import Screen10 from "../components/screens/Screen10";
import Screen11 from "../components/screens/Screen11";
import Screen12 from "../components/screens/Screen12";
import Screen13 from "../components/screens/Screen13";
import Screen14 from "../components/screens/Screen14";
import Screen15 from "../components/screens/Screen15";
import Screen16 from "../components/screens/Screen16";
import Screen17 from "../components/screens/Screen17";
import Screen18 from "../components/screens/Screen18";
const Home = () => {
  const { next, nextHandler } = useTraverse();

  const screens = [
    <Screen1 nextHandler={nextHandler} />,
    <Screen2 nextHandler={nextHandler} />,
    <Screen3 nextHandler={nextHandler} />,
    <Screen4 nextHandler={nextHandler} />,
    <Screen5 nextHandler={nextHandler} />,
    <Screen6 nextHandler={nextHandler} />,
    <Screen7 nextHandler={nextHandler} />,
    <Screen8 nextHandler={nextHandler} />,
    <Screen9 nextHandler={nextHandler} />,
    <Screen10 nextHandler={nextHandler} />,
    <Screen11 nextHandler={nextHandler} />,
    <Screen12 nextHandler={nextHandler} />,
    <Screen13 nextHandler={nextHandler} />,
    <Screen14 nextHandler={nextHandler} />,
    <Screen15 nextHandler={nextHandler} />,
    <Screen16 nextHandler={nextHandler} />,
    <Screen17 nextHandler={nextHandler} />,
    <Screen18 nextHandler={nextHandler} />,
  ];
  return <div className="flex-center-column gap-sm test">{screens[next]}</div>;
};
export default Home;
