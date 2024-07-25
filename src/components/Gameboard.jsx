import useArtworkData from "../hooks/useArtworkData";
import Card from "./Card";

export default function Gameboard() {
  const { artworkData, loading, error } = useArtworkData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {artworkData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            image_url={item.image_url}
          />
        ))}
      </div>
    </>
  );
}
