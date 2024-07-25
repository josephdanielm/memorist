export default function ArtworkCard({ id, title, image_url }) {
  return (
    <div key={id} id={id}>
      <h3>{title}</h3>
      <img src={image_url} referrerPolicy="no-referrer" />
    </div>
  );
}
