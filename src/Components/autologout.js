import React, { useEffect } from "react";




const AutoLogout = ({ children }) => {
    const events = [
        "load",
        "mousemove",
        "mousedown",
        "click",
        "scroll",
        "keypress",
        +6
      ];
  let timer;

const resetTimer = () => {
  if (timer) clearTimeout(timer);
};

const handleTimer = () => {
  timer = setTimeout(() => {
    resetTimer();
    Object.values(events).forEach((item) => {
      window.removeEventListener(item, resetTimer);
    });
    logoutAction();
  }, 10000);
};

useEffect(() => {
    Object.values(events).forEach((item) => {
      window.addEventListener(item, () => {
        resetTimer();
        handleTimer();
      });
    });
  }, []);

const logoutAction = () => {
  localStorage.clear();
  window.location.pathname = "/";
};
  return children;
};

export default AutoLogout;