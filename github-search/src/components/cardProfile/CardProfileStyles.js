import styled from 'styled-components'

export const Card = styled.div`
  background: rgb(9, 8, 3, .5);
  color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #1f1f1f;

  &:hover{
    transform: scale(1.1);
    cursor: pointer;
  }

  img{
    border-radius: 10px 10px 0 0 ;
  }

  h5{
    font-size: 1rem;
    padding: .2rem 0 .5rem 0;
  }
`