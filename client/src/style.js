import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  width: 100vw;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
`;

const AverageCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  /* height: 500px; */
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
`;

const HighestCasesCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1000px;
  /* height: 500px; */
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
`;

const HighestCasesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  /* height: 500px; */
`;

const HighestCasesButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 120px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
`;

export { Page, CardsContainer, AverageCard, HighestCasesCard, HighestCasesContent, HighestCasesButton };