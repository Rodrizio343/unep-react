import React from "react";
import Lottie from "react-lottie";
import wineAnimation from "assets/lottie/59160-wineglass.json";

const Spinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: wineAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie options={defaultOptions} width={200} height={200} />
    </div>
  );
};

export default Spinner;
