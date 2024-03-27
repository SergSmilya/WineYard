import axios from "axios";

export async function getDelivery() {
  try {
    return await axios.get('https://publicapi.meest.com/branches');
  } catch (error) {
    console.error(error);
  }
}

