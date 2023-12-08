const axios = require('axios');

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const getAccessToken = async () => {
  const token = Buffer.from(`${clientId}:${clientSecret}`, 'utf-8').toString('base64');

  try {
    const response = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': `Basic ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: 'grant_type=client_credentials'
    });

    return response.data.access_token;
  } catch (error) {
    console.error('Error getting Spotify access token', error);
  }
};

export const searchMusic = async (query) => {
  const accessToken = await getAccessToken();
  if (!accessToken) return;

  try {
    const response = await axios({
      method: 'get',
      url: `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`,
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    return response.data.tracks.items;
  } catch (error) {
    console.error('Error searching Spotify', error);
  }
};
