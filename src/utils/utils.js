export const setRequestHeaders = (token) => {
  return {
    "Content-type": "application/json",
    "x-auth-token": token
  }
}