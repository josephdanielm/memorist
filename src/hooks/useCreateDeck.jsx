import { useState, useEffect } from "react";
import getProcessedArtworkData from "../api/artworkDataHandler";

export default function useCreateDeck(resetGameTrigger) {
  const [deck, setDeck] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      setLoading(true);
      setError(null);
      try {
        const data = await getProcessedArtworkData();
        if (!ignore) {
          setDeck(data);
        }
      } catch (e) {
        if (!ignore) {
          setError(e);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }
    startFetching();

    return () => {
      ignore = true;
    };
  }, [resetGameTrigger]);

  return { deck, loading, error };
}
