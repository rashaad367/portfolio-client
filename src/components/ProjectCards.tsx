import React from "react";
import style from "./ProjectCards.module.css";

type CardProps = {
  name: string;
  imageUrl: string;
  description: string;
  button1Text: string;
  button1Url: string;
  button2Text: string;
  button2Url: string;
};

const Card: React.FC<CardProps> = ({
  name,
  imageUrl,
  description,
  button1Text,
  button1Url,
  button2Text,
  button2Url,
}) => {
  const handleButton1Click = () => {
    window.location.href = button1Url;
  };
  const handleButton2Click = () => {
    window.location.href = button2Url;
  };

  return (
    <div>
      <div className={`${style.pcard} ${style.cardBackground} ${style.lift}`}>
        <h1 className="font-mono center leading-loose">{name}</h1>
        <img src={imageUrl} alt="Card" className="mb-4" />
        <p className="mb-4 leading-relaxed">{description}</p>
        <div className="flex">
          <button
            className="mr-4 w-1/2 font-bold font-mono transition transform hover:-translate-y-1"
            onClick={handleButton1Click}
          >
            {button1Text}
          </button>
          <button
            className="w-1/2 font-bold font-mono transition transform hover:-translate-y-1"
            onClick={handleButton2Click}
          >
            {button2Text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
