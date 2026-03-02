import React from "react";
import Greeting from "./Greeting";
import DestructuringProps from "./DestructuringProps";
import ConditionalRendering from "./ConditionalRendering";
import Listrendering from "./Listrendering";
import UseStateHook from "./Component/UseStateHook";
import DarkMode from "./Component/DarkMode";
import FieldUsetate from "./Component/FieldUsetate";
import MultipleFields from "./Component/MultipleFields";
import Register from "./Component/Register";
import UseEffectHook from "./Component/UseEffectHook";
import Timer from "./Component/Timer";
import StopWatchTimer from "./Component/StopWatchTimer";
import UseEffectAPI from "./Component/UseEffectAPI";

// import

export default function App() {
  const age = "55";
  // functionality
  const name = "kumar";
  const city = "salem";
  const phnum = "123456789";

  const name2 = "rahul";
  const city2 = "chennai";
  const phnum2 = "456555555";

  const name3 = "Dravid";
  const city3 = "madurai";
  const phnum3 = "484998995";
  const display = false;

  return (
    // structure
    <div>
      <UseEffectAPI />
      <StopWatchTimer />
      <Timer />
      <UseEffectHook />
      <Register />
      <MultipleFields />
      <FieldUsetate />
      <DarkMode />
      <UseStateHook />
      <Listrendering />
      <ConditionalRendering />
      <h2>name: {name}</h2>
      <h1>Hello everyone</h1>
      {display ? (
        <Greeting Firstname={name} number={age} />
      ) : (
        <DestructuringProps Fullname={name} address={city} phone={phnum} />
      )}
      <Greeting Firstname={name} number={age} />
      <DestructuringProps Fullname={name2} address={city2} phone={phnum2} />
      <DestructuringProps Fullname={name3} address={city3} phone={phnum3} />
    </div>
  );
}
