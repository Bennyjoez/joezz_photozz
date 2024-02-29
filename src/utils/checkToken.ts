export default function isTokenExpired(token: string): boolean {
  if (!token) {
    return true;
  }

  try {
    const [, payloadBase64] = token.split('.');
    const payloadJson = atob(payloadBase64);
    const payload = JSON.parse(payloadJson);
    
    if (payload && typeof payload.exp === 'number') {
      const currentTime = Math.floor(Date.now() / 1000);
      return currentTime > payload.exp;
    } else {
      console.error('Invalid or missing expiration time in token payload');
      return true;
    }
  } catch (error) {
    console.error('Error parsing token payload:', error);
    return true;
  }
}
