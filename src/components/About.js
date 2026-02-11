import React, { useEffect } from "react";

function About(props) {
  useEffect(() => {
    runTopBar();
    document.title = `MovieHub - ${capitalizerFirstLetter(props.category)}`;
    // eslint-disable-next-line
  }, []);

  const capitalizerFirstLetter = (string) => {
    if (!string) return "About";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const runTopBar = () => {
    props.setProgress(0);
    setTimeout(() => props.setProgress(10), 50);
    setTimeout(() => props.setProgress(30), 150);
    setTimeout(() => props.setProgress(50), 300);
    setTimeout(() => props.setProgress(100), 500);
  };

  return (
    <div className="container">
      <h1>I am About</h1>
    </div>
  );
}

export default About;
