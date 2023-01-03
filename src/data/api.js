const baseURL = "https://place-api.herokuapp.com/api/v1";

const getData = async (url) => {
  try {
    const res = await fetch(url);
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.warn(`Failed to fetch data in api.js -> getData`);
  }
};

export const getInRadius = async (postcode = "B3 2NP", radius = 0.2) => {
  const url = `${baseURL}/places/locationsearch/${postcode}/${radius}`;
  return getData(url);
};

export const getPlace = async (
  id = "63acbe82e9f5e81606758186",
  nameSlug = "china-court-bakery"
) => {
  const url = `${baseURL}/place/${id}/${nameSlug}`;
  const data = getData(url);
  return data[0];
};
