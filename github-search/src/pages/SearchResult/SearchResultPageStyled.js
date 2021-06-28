import styled from 'styled-components'

export const Main = styled.main`
  background-color: #121212;
  padding: 1rem;
  min-height: 100vh;

  p{
    grid-column: 1 / -1;
    width: 100%;
    color: white;
    padding: .5rem;

    font-size: 1rem;

    span{
      font-weight: 600;
    }
  } 
`

export const Results = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

export const Pagination = styled.nav `
  background: #121212;
  width: 100%;
  padding: .5rem;

  display: flex;
  justify-content: center;


`

export const PaginationItem = styled.button `
  border: none;
  background: #121212;
  padding: .5rem;

  &:hover{
    background: none;
    color: white;
    transform: scale(1.1);
  }
`

export const PaginationLink = styled.a `
  text-decoration: none;
  color: white;

  &:visited{
    color: white;
  }
  &:hover{
    color: white;
  }
`
