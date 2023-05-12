export const exerciseOptions ={
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'bbdf16a79amsh0b876082995b722p1f4800jsn3c678497f50e',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        }
    }

   export  const youtubeOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'bbdf16a79amsh0b876082995b722p1f4800jsn3c678497f50e',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    };

export const fetchData = async (url,options)=>{
    const res= await fetch(url,options);
    const data = await res.json();
    return data;
}