import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 16px;
`;

export const Wrapper = styled.div`
  text-align: center;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;              
  }

  p {
    margin-top: 8px;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const ButtonAddFav = styled.button`
background-color: blue;
`

export const ButtonRemoveFav = styled.button`
background-color: red;
`

export const ButtonBack = styled.button`
background-color: green;
`

export const Body = styled.button`
text-align: center;
`
