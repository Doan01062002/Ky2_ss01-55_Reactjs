import React from "react";
import { Route, Routes } from "react-router-dom";
import Bt01Home from "./btsession51_52/Bt01Home";
import Bt01About from "./btsession51_52/Bt01About";
import Bt01Contact from "./btsession51_52/Bt01Contact";
import Bt02 from "./btsession51_52/bt02/Bt02";
import Bt02Home from "./btsession51_52/bt02/Bt02Home";
import Bt02About from "./btsession51_52/bt02/Bt02About";
import Bt02Contact from "./btsession51_52/bt02/Bt02Contact";
import Index from "./btsession51_52/bt03/Index";
import Bt03Home from "./btsession51_52/bt03/Bt03Home";
import Bt03About from "./btsession51_52/bt03/Bt03About";
import Bt03Contact from "./btsession51_52/bt03/Bt03Contact";
import Bt03Sevices from "./btsession51_52/bt03/Bt03Sevices";
import Bt03Element from "./btsession51_52/bt03/Bt03Element";

export default function App() {
  return (
    <>
      {/* <Routes>
        <Route path="" element={<Bt01Home></Bt01Home>}>
          <Route path="/about" element={<Bt01About></Bt01About>}></Route>
          <Route path="/contact" element={<Bt01Contact></Bt01Contact>}></Route>
        </Route>
      </Routes> */}

      {/* <Routes>
        <Route path="" element={<Bt02></Bt02>}>
          <Route path="/home" element={<Bt02Home></Bt02Home>}></Route>
          <Route path="/about" element={<Bt02About></Bt02About>}></Route>
          <Route path="/contact" element={<Bt02Contact></Bt02Contact>}></Route>
        </Route>
      </Routes> */}

      <Routes>
        <Route path="/" element={<Index></Index>}>
          <Route path="home" element={<Bt03Home></Bt03Home>}></Route>
          <Route path="about" element={<Bt03About></Bt03About>}></Route>
          <Route path="contact" element={<Bt03Contact></Bt03Contact>}></Route>
          <Route path="service" element={<Bt03Sevices></Bt03Sevices>}></Route>
          <Route path="elment" element={<Bt03Element></Bt03Element>}></Route>
        </Route>
      </Routes>
    </>
  );
}
