import styled from 'styled-components'

export const Main = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #121212;
`

export const Form = styled.div`
  display: flex;
`

export const Input = styled.input`
  width: 20rem;
  padding: .5rem;
  font-size: 1rem;
  border-radius: 4px 0px 0px 4px;
  border: none;

  @media screen and (min-device-width: 320px) and (max-device-width: 420px){
    width: 16rem;
  }
`

export const Logo = styled.img`
  width: 12rem;
  margin-bottom: 1rem;

  @media screen and (min-device-width: 320px) and (max-device-width: 420px){
    width: 10rem;
  }
`

export const Title = styled.h1`
  color: #9E9E9E;
  font-size: 1.5rem;
  margin-bottom: .5rem;

  @media screen and (min-device-width: 320px) and (max-device-width: 420px){
    font-size: 1.3rem;
  }
`


export const MagnifyingGlass = styled.img`
  width: 90%;
`

export const ButtonSearch = styled.button`
  width: 2rem;
  border: none;
  padding: .2rem;
  border-radius: 0px 4px 4px 0px;

  display: flex;
  align-items: center;
  justify-content: center;

`