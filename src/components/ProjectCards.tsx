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
  return (
    <div>
      <div className={`${style.pcard} ${style.cardBackground} ${style.lift}`}>
        <h1 className="font-mono center leading-loose">{name}</h1>
        <img src={imageUrl} alt="Card" className="mb-4" />
        <p className="mb-4 leading-relaxed">{description}</p>
        <div className="flex">
          <a
            className="mr-4 w-1/2 font-bold font-mono transition transform hover:-translate-y-1"
            href={button1Url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>{button1Text}</button>
          </a>
          <a
            className="w-1/2 font-bold font-mono transition transform hover:-translate-y-1"
            href={button2Url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>{button2Text}</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
