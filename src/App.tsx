import React, { useEffect } from "react";
import "./App.css";
import Router from "./Router";

function App() {
  useEffect(() => {
    const win: any = window;

    win.yaContextCb.push(() => {
      /* @ts-ignore */
      Ya.Context.AdvManager.renderWidget({
        renderTo: "yandex_rtb_C-A-2507683-1",
        blockId: "C-A-2507683-1",
      });
    });
  }, []);
  return (
    <div>
      Ads
      <div id="yandex_rtb_C-A-2507683-1"></div>
      <Router />
    </div>
  );
}

export default App;
