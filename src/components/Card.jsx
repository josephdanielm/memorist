export default function Card({ id, title, image_url, handleCardClick }) {
  return (
    <button
      className="flex flex-col text-center justify-end"
      key={id}
      id={id}
      onClick={handleCardClick}
    >
      <img
        src={image_url}
        className="h-auto max-w-full"
        referrerPolicy="no-referrer"
      />
      <h3 className="text-sm line-clamp-2 mx-auto">{title}</h3>
    </button>
  );
}
