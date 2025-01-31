export default async function fetchArtworkData() {
  let response = await fetch(getArtworkUrl(), {
    headers: {
      "AIC-User-Agent": "memorist (josephdanielmudd@gmail.com)",
    },
  });
  let data = await response.json();
  return data;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getArtworkUrl() {
  return `https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=24&page=${getRandomInt(41)}&fields=id,title,image_id`;
}
