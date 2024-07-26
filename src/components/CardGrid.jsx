import Card from "./Card";

export default function CardGrid({
  activeCards,
  handleCardClick,
  loading,
  error,
}) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // inline-flex flex-wrap items-start justify-evenly gap-x-6 grow overflow-y-scroll pt-8 pb-12
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
