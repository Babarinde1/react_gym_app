export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "06c79aa807mshe7bd0f119cdeb8fp13f666jsn7b90778c58a8",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};


export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fa96a40cdbmsh0727fa0a67a8113p1f8630jsn1565754b5284",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
 const response = await fetch(url, options);
 const data = await response.json();
 return data;
}

export default fetchData