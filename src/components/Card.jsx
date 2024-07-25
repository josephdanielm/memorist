export default function Card({ id, title, image_url }) {
  return (
    <div key={id} id={id}>
      <h3 className="text-sm line-clamp-2">{title}</h3>
      <img
        src={image_url}
        className="h-auto max-w-full"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
