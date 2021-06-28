import styled from 'styled-components'

export const ContainerStarred = styled.section `
  display: grid;
  gap: 1rem;
  margin: .5rem 1rem;
  height: 80%;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows:  repeat(3, 1fr);
`