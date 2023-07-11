import React, { useEffect } from "react";
import "./App.css";
import Router from "./Router";

function App() {
  useEffect(() => {
    const win: any = window;

    win.yaContextCb.push(() => {
      /* @ts-ignore */
      Ya.Context.AdvManager.render({
        blockId: "R-A-2507872-1",
        renderTo: "yandex_rtb_R-A-2507872-1",
      });
    });
  }, []);
  return (
    <div>
      Ads
      <div id="yandex_rtb_R-A-2507872-1"></div>
      <Router />
    </div>
  );
}

export default App;
