import axios from "axios";

export async function getUser() {
  try {
    return await axios.get('https://cors-anywhere.herokuapp.com/http://back.wineyard.space:8000/api/favorites/');
    
  } catch (error) {
    console.error(error);
  }
}