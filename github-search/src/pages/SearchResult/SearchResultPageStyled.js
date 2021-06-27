import styled from 'styled-components'

export const Main = styled.main`
  background-color: #121212;
  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 30px 1fr;
  gap: 1.5rem;

  @media screen and (min-device-width: 320px) and (max-device-width: 420px){
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-device-width: 421px) and (max-device-width: 800px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-device-width: 801px) and (max-device-width: 1200px){
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Results = styled.p`
  grid-column: 1 / -1;
  width: 100%;
  height: 100%;
  color: white;
  padding: .5rem;

  font-size: 1rem;

  span{
    font-weight: 600;
  }
`