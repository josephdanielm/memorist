import useArtworkData from "../hooks/useArtworkData";

export default function Gameboard() {
  const { artworkData, loading, error } = useArtworkData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div>Gameboard</div>
      {artworkData.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image_url} />
        </div>
      ))}
      ;
    </>
  );
}
