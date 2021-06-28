import styled from 'styled-components'

export const Container = styled.header`
  background:  rgb(9, 8, 3, 1);
  padding: 1rem;

  button{
    background: none;
    padding: .2rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
      width: 2rem;
    }

    p{
      color: white;
      padding-left: .3rem;
      font-size: 1.2rem;

      
    }

    &hover{
      background: #121212;
    }
  }  
`