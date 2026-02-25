import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        {alertVisible && (
          <Alert onClick={() => setAlertVisibility(false)}> Hola </Alert>
        )}
        <Button color="primary" onClick={() => setAlertVisibility(true)}>
          Big Button
        </Button>
      </div>
    </>
  );
}

export default App;
