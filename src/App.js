import Navbar from "./scenes/Navbar"
import { useState } from "react";
import userMediaQuery from "./hooks/useMediaQuery"

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = userMediaQuery("(min-width:1060px)")

  return <div className="app bg-deep-blue">
    <Navbar selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
  </div>;
}

export default App;
