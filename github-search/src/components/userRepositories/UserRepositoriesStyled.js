import styled from 'styled-components'

export const ContainerRepositories = styled.section `
  display: grid;
  gap: 1rem;
  margin: .5rem 1rem;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows:  repeat(2, 1fr);

  @media screen and (min-device-width: 320px) and (max-device-width: 420px){
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-device-width: 421px) and (max-device-width: 800px){
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`