const AUTHORIZATION_TOKEN = '7N4j3XJgPSW6BwbAdK4BRsXLLfv8e5nQXtKgAyAHwXUR9J2iRN'

export const verifyToken = token => {
  if (token === 'Bearer ' + AUTHORIZATION_TOKEN) {
    return true
  }
  return false
}
