import axios from 'axios';

const fetchProducts = async ({ offset = 0, limit = 10 }) => {
  const response = await axios.get(
    `https://api.escuelajs.co/api/v1/products/?offset=${offset}&limit=${limit}`,
    {
      headers: {
        // Include your authorization token or other SSO headers here
        'Authorization': `Bearer YOUR_SSO_TOKEN`
      }
    }
  );
  return response.data;
};
