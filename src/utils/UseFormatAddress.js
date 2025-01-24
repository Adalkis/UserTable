const UseFormatAddress = (address = null) => {
  let formattedAddress = "";

  if (!address) return formattedAddress;

  const { city, suite, street, zipCode } = address;

  if (street) {
    formattedAddress += `Street ${street} `;
  }

  if (suite) {
    formattedAddress += `Suite ${suite} `;
  }

  if (city) {
    formattedAddress += city;
  }

  if (zipCode) {
    formattedAddress += zipCode;
  }
  return formattedAddress;
};

export default UseFormatAddress;
