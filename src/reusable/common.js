import { useState, useEffect } from "react";

export const imageUploadCallBack = (file) =>
  new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    let img = new Image();
    // let url = ''
    reader.onload = function (e) {
      img.src = this.result;
      resolve({
        data: {
          link: img.src,
        },
      });
    };
  });

  export const innerText = (data) => {
    const div = document.createElement("div");
    div.innerHTML = data;
    return div.innerText;
  };
 export  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }

  export const defaultFonts = [
    "Arial",
    "Comic Sans MS",
    "Courier New",
    "Impact",
    "Georgia",
    "Tahoma",
    "Trebuchet MS",
    "Verdana",
  ];
  export   const sortedFontOptions = [
      "Logical",
      "Salesforce Sans",
      "Garamond",
      "Sans-Serif",
      "Serif",
      "Times New Roman",
      "Helvetica",
      ...defaultFonts,
    ].sort();