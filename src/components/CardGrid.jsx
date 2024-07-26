import Card from "./Card";

export default function CardGrid({
  activeCards,
  handleCardClick,
  loading,
  error,
}) {
  if (loading) return <div className="mx-auto flex pt-10">Loading...</div>;
  if (error)
    return <div className="mx-auto flex pt-10">Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4 items-start">
      {activeCards.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          image_url={item.image_url}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
}
