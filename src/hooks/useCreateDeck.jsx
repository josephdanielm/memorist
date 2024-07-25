import { useState, useEffect } from "react";
import getProcessedArtworkData from "../api/artworkDataHandler";

export default function useCreateDeck() {
  const [deck, setDeck] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      try {
        const data = await getProcessedArtworkData();
        if (!ignore) {
          setDeck(data);
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, []);

  return { deck, loading, error };
}
