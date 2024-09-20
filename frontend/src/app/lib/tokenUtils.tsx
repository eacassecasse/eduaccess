import axios from 'axios';
import nookies from 'nookies';

export const isTokenExpired = (token: string) => {
  if (!token || token === undefined) return true;

  try {
    const parts = token.split('.')

    if (parts.length !== 3) {
      console.error("Invalid token format", token);
      return true;
    }

    const base64Url = parts[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    const payload = JSON.parse(atob(base64));
    const exp = payload.exp * 1000;

    return Date.now() > exp;
  } catch (error: any) {
    console.error("Failed to decode token", error)
    return true;
  }
}


export const refreshAccessToken = async () => {
  const cookies = nookies.get(null);
  const refreshToken = cookies['refresh_token'];

  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  try {
    const res = await axios.post('https://eduaccess.up.railway.app/api/v1/auth/refresh/', {
      refresh: refreshToken,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const { access } = res.data;

    nookies.set(null, 'access_token', access, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    });

    return access;

  } catch (err: any) {
    console.error('Failed to refresh token', err);
    throw err
    // Log out user or handle error
  }
};

export const clearAuthCookies = () => {
  nookies.destroy(null, 'access_token')
  nookies.destroy(null, 'refresh_token')
}