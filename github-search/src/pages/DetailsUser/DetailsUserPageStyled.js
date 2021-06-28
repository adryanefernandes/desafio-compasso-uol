import styled from 'styled-components'

export const Main = styled.main `
  display: grid;
  grid-template-rows: 15rem 3rem 2fr;
  height: 100vh;
  padding: 1rem;

  background-color: #121212;

  @media screen and (min-device-width: 320px) and (max-device-width: 800px){
    flex-direction: column;
    grid-template-rows: 1fr 3rem 2fr;
    height: 100%;
  }
`

export const CardUser = styled.section `
  display: flex;
  align-items: center;

  border-radius: 10px 10px 0 0;
  background: rgb(9, 8, 3, .5);
  color: white;
  padding: 2rem;
  height: 15rem;

  img{
    width: 12rem;
    height: 12rem;
    margin-right: 2rem;
  }

  p{
    margin-top: .2rem;
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 800px){
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
`

export const CardBody = styled.section `
`

export const Bio = styled.p`
  font-size: 1.2rem;
  padding-bottom: 1rem;
`

export const ButtonGroup = styled.section `
  background: rgb(9, 8, 3, .5);
  width: 100%;
  
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: .5rem;

  button{
    font-size: 1.2rem;
    background: none;
    color: #545454;
    border: none;

    &:hover{
      background: rgb(9, 8, 3, 1);
    }

    &:focus{
      background: rgb(9, 8, 3, 1);
      color: white;
    }
  } 
`
export const Infos = styled.section`
  overflow-y: auto;
`