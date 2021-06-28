import styled from 'styled-components'

export const ContainerStarred = styled.section `
  display: grid;
  gap: 1rem;
  margin: .5rem 1rem;
  height: 80%;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows:  repeat(3, 1fr);

  @media screen and (min-device-width: 320px) and (max-device-width: 420px){
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-device-width: 421px) and (max-device-width: 800px){
    grid-template-columns: repeat(2, 1fr);
  }
`