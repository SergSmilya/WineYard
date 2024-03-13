import axios from "axios";

export async function getWineList() {
  try {
    const response = await axios.get('http://back.wineyard.space:8000/api/goods/');
    const responseData = response.data;
    return responseData;
  } catch (error) {
    console.error((error as Error).message);
  }
}