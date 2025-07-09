"use client"; // Add this directive at the top
import { useLottie } from "lottie-react";
import LottieAnimation from "../../../../public/lotte.json";

const LottieAni = () => {
  const options = {
    animationData: LottieAnimation,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(options);

  return (
    <div className="w-full h-full max-w-[500px] max-h-[300px]">{View}</div>
  );
};

export default LottieAni;
// lottie ani
