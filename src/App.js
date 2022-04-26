import { useState } from "react";
import { Aside } from "./Aside";
import { ChildrenProp } from "./children";
import { Button } from "./children/Button";
import { Props } from "./props";
import { State } from "./state";

function App() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const handleClick = () => {
    if (isAsideOpen) {
      setIsAsideOpen(false);
    } else {
      setIsAsideOpen(true);
    }
  };

  return (
    <div className="App">
      {/* <Props /> */}
      {/* <ChildrenProp /> */}
      {/* <State /> */}
      <Aside isOpen={isAsideOpen} />
      <Button style={{ position: "fixed", right: 0 }} onClick={handleClick}>
        Open
      </Button>
    </div>
  );
}

export default App;
