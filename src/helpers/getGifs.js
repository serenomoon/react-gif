

export const getGifs = async(category) => {
    const apikey = 'fILVPB3B0F4ymssVVTMHJEuoxYIi1HJZ'
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI( category )}&limit=10&api_key=${apikey}`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    return gifs;
    
  };