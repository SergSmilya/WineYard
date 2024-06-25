import axios from "axios";

const BaseURL = 'https://api.apilayer.com/number_verification/validate';
axios.defaults.headers.common['apikey'] = import.meta.env.VITE_AUTH_TOKEN;

export async function getVerify(number: number) {
  try {
    return await axios(`${BaseURL}?number=${number}`);
  } catch (error) {
    console.error(error);
  }
}
