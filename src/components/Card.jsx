import { useState } from "react";

export default function Card({ id, title, image_url, handleCardClick }) {
  const [imgSrc, setImgSrc] = useState(image_url);

  const handleError = () => {
    setImgSrc("https://placekeanu.com/400");
  };

  return (
    <button
      className="flex flex-col text-center justify-end"
      key={id}
      id={id}
      onClick={handleCardClick}
    >
      <img
        src={imgSrc}
        className="h-auto max-w-full"
        referrerPolicy="no-referrer"
        onError={handleError}
      />
      <h3 className="text-sm line-clamp-2 mx-auto">{title}</h3>
    </button>
  );
}
