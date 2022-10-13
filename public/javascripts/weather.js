const key = BFD3sxhwWKNIemsMn95XeHXjGdqNhMR7;

const weatherDetails = async function(id) {
    const url = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const res = await fetch(url + query);
    const data = await res.json();

    return data[0]
}

const cityDetails = async function(city) {
    const url = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const res = await fetch(url + query);
    const data = await res.json();

    return data[0];
}
