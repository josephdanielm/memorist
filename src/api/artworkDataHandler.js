import fetchArtworkData from "../api/fetchArtworkData";

export default async function getProcessedArtworkData() {
  const rawDataObject = await fetchArtworkData();

  const baseImgUrl = rawDataObject.config.iiif_url;
  const dataArray = rawDataObject.data;

  const processedData = dataArray.map((item) => {
    return {
      id: item.id,
      title: item.title,
      image_url: baseImgUrl + "/" + item.image_id + "/full/843,/0/default.jpg",
    };
  });

  console.log(processedData); // remove log
  return processedData;
}
