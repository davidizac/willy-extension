import { useState } from "react";
import NavBar from "./src/components/Navbar";

const Content = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div id="willy-container">
      <NavBar/>
    </div>
  );
}

export default Content
