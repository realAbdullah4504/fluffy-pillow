import { useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    window.location("https://www.eagleelite.pk/", "_self");
  }, []);

  return <div></div>;
}

export default App;
