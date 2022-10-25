import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import { getCountryData, saveData } from './service/Api';
import { AverageCard, CardsContainer, HighestCasesButton, HighestCasesCard, HighestCasesContent, Page } from './style';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await getCountryData();
      setData(response);
      setLoading(false);
    };

    const getLocation = () => {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLocation(position.coords);
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        });
      }
    }
    getLocation();
    getData();
  }, []);

  const lastTwoWeeks = data.slice(-21, -14);
  const lastWeek = data.slice(-7);
  const lastMonth = data.slice(-30);
  const highestConfirmed = Math.max(...lastMonth.map((item) => item.Confirmed));
  const highestDeaths = Math.max(...lastMonth.map((item) => item.Deaths));
  
  const lastTwoWeeksAvg = lastTwoWeeks.reduce((acc, curr) => acc + curr.Deaths, 0) / lastTwoWeeks?.length - lastTwoWeeks[0]?.Deaths;
  const lastWeekAvg = lastWeek.reduce((acc, curr) => acc + curr.Deaths, 0) / lastWeek?.length - lastWeek[0]?.Deaths;

  const handleClick = () => {
    const now = new Date();
    const date = now.toISOString();
    saveData({
      latitude,
      longitude,
      highestConfirmed,
      highestDeaths,
      date,
    });
  };


  return (
    <div className="app">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Page>
          <h1>Casos de Covid</h1>
          <CardsContainer>
            <AverageCard>
              <h2>Média Móvel 14 dias atrás: {lastTwoWeeksAvg.toFixed(0)}</h2>
              {/* <p>{lastTwoWeeksAvg.toFixed(0)}</p> */}
              <p>Dados utilizados para cáclulo:</p>
              {lastTwoWeeks.map((item) => (
                <ul>
                  <li>Data: {item.Date}</li>
                  <li>Casos Confirmados: {item.Confirmed}</li>
                  <li>Total Mortes: {item.Deaths}</li>
                </ul>
                ))}
            </AverageCard>
            <AverageCard>
              <h2>Média Móvel últimos 7 dias: {lastWeekAvg.toFixed(0)}</h2>
              {/* <p>{lastWeekAvg.toFixed(0)}</p> */}
              <p>Dados utilizados para cáclulo:</p>
              {lastWeek.map((item) => (
                <ul>
                  <li>Data: {item.Date}</li>
                  <li>Casos Confirmados: {item.Confirmed}</li>
                  <li>Total Mortes: {item.Deaths}</li>
                </ul>
              ))}
            </AverageCard>
            
          </CardsContainer>
          <HighestCasesCard>
            <HighestCasesContent>
              <h2>Maior número de casos registrados nos últimos 30 dias</h2>
              <p>{highestConfirmed}</p>
              <h2>Maior número de mortes registradas nos últimos 30 dias</h2>
              <p>{highestDeaths}</p>
            </HighestCasesContent>
            <HighestCasesButton onClick={handleClick}>
              Clique para salvar os dados
            </HighestCasesButton>
          </HighestCasesCard>
        </Page>
      )}
    </div>
  );
}

export default App;
