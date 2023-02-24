const getLocation = async (input, type) => {
  const apiKey = "at_j2vGrGCbWgf6tZTbeWQqsn9qh1F8T";
  const url =
    type === 0
      ? `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${input}`
      : `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${input}`;

  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Unable to fetch location");
  }
};

export { getLocation as default };
