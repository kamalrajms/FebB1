import React, { useContext, createContext, useState } from "react";
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
import First from "./Context/First";
import ContextForm from "./Context/ContextForm";
import UseRefHook from "./Component/UseRefHook";
import UseCallBackHook from "./Component/UseCallBackHook";
import CallbackHook from "./Component/CallbackHook";
import UseIdHook from "./Component/UseIdHook";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Router/Home";
import About from "./Router/About";
import Service from "./Router/Service";
import Contact from "./Router/Contact";
import WebDev from "./Router/WebDev";
import AppDev from "./Router/AppDev";
import BloogDetailes from "./Component/BloogDetailes";

export const Pass = createContext();

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

  const [mode, setMode] = useState("light");
  const data = { name: "Dhoni" };
  console.log(mode);

  return (
    // structure
    <div>
      {display && (
        <div>
          <h1>component 1</h1>
          <UseIdHook />
          <h1>component 2</h1>
          <UseIdHook />
          <h1>component 3</h1>
          <UseIdHook />
          <CallbackHook />
          <UseCallBackHook />
          <UseRefHook />
          <nav>
            <h1>usecontext eg2</h1>
            <Pass.Provider value={{ mode, setMode, data }}>
              <ContextForm />
            </Pass.Provider>
          </nav>

          <div style={{ border: "2px solid #000", padding: "20px" }}>
            <h2>App component---{name}</h2>
            <Pass.Provider value={name}>
              <First />
            </Pass.Provider>
          </div>
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
      )}
      <BrowserRouter>
        <div className="header">
          <Link to={"/Home"}>Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={""}>Service</Link>
          <Link to={"/Contact"}>Contact</Link>
        </div>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} >
            <Route path="WebDevelopment" element={<WebDev/>}/>
            <Route path="AppDevelopment" element={<AppDev/>}/>
          </Route>
          <Route path="" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blogs/:id" element={<BloogDetailes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
