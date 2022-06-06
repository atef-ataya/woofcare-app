export default async function request(url, options) {
  const fetchResponse = await fetch(url, options);
  let response;
  try {
    response = fetchResponse.json();
  } catch (e) {
    response = fetchResponse;
  }
  return response;
}
