import fetch from 'node-fetch';

const fetchQuotes = async () => {
  const URL = 'https://futuramaapi.herokuapp.com/api/quotes';
  const response = await fetch(URL);
  const data = await response.json();
  const formattedData = {
    name: data[0].character,
    text: data[0].quote,
    image: data[0].image,
  };

  return formattedData;
};

export default fetchQuotes;
