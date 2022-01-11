export const setRequestHeaders = (token) => {
  return {
    "Content-type": "application/json",
    "authorization": token
  }
}