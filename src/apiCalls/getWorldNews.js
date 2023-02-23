export const getNews = async (category) => {
  const url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=pGGR5Ab1Pi937zK9C9zXVDyeLJTiSLD3`;
  const response = await fetch(url);
  if (response.status < 200 && response.status > 299) {
    throw response;
  }
  return response.json();
};
