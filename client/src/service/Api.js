import { server } from "../config/api";

export async function getCountryData() {
  const response = await server.get("/api");
  return response.data;
}

export async function saveData({ latitude, longitude, highestConfirmed, highestDeaths, date}) {
  console.log(latitude, longitude, highestConfirmed, highestDeaths, date);
  const response = await server.post("/data", {
    latitude,
    longitude,
    highestConfirmed,
    highestDeaths,
    date,
  });
  return response.data;
}