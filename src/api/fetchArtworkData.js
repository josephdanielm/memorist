export default async function fetchArtworkData() {
  try {
    let response = await fetch(getArtworkUrl());
    let data = await response.json();
    console.log(data);
  } catch (e) {
    console.error(e);
    // TODO: add additional error handling
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getArtworkUrl() {
  return `https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=24&page=${getRandomInt(41)}&fields=data,config`;
}
