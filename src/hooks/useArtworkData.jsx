import { useState, useEffect } from "react";
import getProcessedArtworkData from "../api/artworkDataHandler";

export default function useArtWorkData() {
  const [artworkData, setArtworkData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      try {
        const data = await getProcessedArtworkData();
        if (!ignore) {
          setArtworkData(data);
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

  return { artworkData, loading, error };
}
