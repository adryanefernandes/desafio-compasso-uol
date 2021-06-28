import styled from 'styled-components'

export const Container = styled.header`
  background:  rgb(9, 8, 3, 1);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  
`

export const BackButton = styled.button `
  padding: .2rem;
  background: none;
  border: none;

  display: flex;
  align-items: center;

  img{
    width: 2rem;
  }
  span{
    color: white;
    padding-left: .3rem;
    font-size: 1.2rem;
  }
  &hover{
    background: #121212;
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 420px){
    flex-direction: column;
  }

`

export const Form = styled.div`
  display: flex;

  input{
    width: 20rem;
    padding: .5rem;
    font-size: 1rem;
    border-radius: 4px 0px 0px 4px;
    border: none;

    @media screen and (min-device-width: 320px) and (max-device-width: 420px){
      width: 12rem;
      height: 2.5rem;
    }
  }

  button{
    background: white;
    width: 2rem;
    border: none;
    padding: .2rem;
    border-radius: 0px 4px 4px 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
      width: 90%;
    }

    
  }
  
  @media screen and (min-device-width: 320px) and (max-device-width: 420px){
    height: 2.5rem;
  }
`
