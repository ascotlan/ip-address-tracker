const getLocation = async (ip) => {
  const apiKey = "at_j2vGrGCbWgf6tZTbeWQqsn9qh1F8T";
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Unable to fetch location");
  }
};

export { getLocation as default };
