import Card from "./Card";

export default function CardGrid({ activeCards, loading, error }) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
      {activeCards.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          image_url={item.image_url}
        />
      ))}
    </div>
  );
}
