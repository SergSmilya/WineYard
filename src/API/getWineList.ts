import axios from "axios";

export async function getWineList(page: number) {
  try {
    const response = await axios.get(`http://back.wineyard.space:8000/api/goods/?page=${page}`);
    const responseData = response.data;
    return responseData;
  } catch (error) {
    console.error((error as Error).message);
  }
}