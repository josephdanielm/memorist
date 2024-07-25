import useArtworkData from "../hooks/useArtworkData";
import ArtworkCard from "./ArtworkCard";

export default function Gameboard() {
  const { artworkData, loading, error } = useArtworkData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="grid grid-cols-4 ">
        {artworkData.map((item) => (
          <ArtworkCard
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
