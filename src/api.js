import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID D6l_CHTsKqbUcF7gftiYu3x9buvB1r_hDiqviKwTT0A',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
