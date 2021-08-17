import styled from "styled-components";

export const ExchangeWrapper = styled.div`
  color: #000;
  background-color: #fff;
  width: 400px;
  height: auto;
  border-top: 5px solid #0099fe;
  box-shadow: 0 3px 4px 0 rgb(0 0 0 / 20%);
  border-radius: 6px;
  padding: 2rem;
  box-sizing: border-box;
  text-align: center;
`;

export const ExchangeButton = styled.button`
  color: #fff;
  background: #0099fe;
  border-radius: 4px;
  text-align: center;
  width: 100%;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0.5rem 0;
  margin-top: 1.5rem;
`;

export const ExchangeTitle = styled.section`
  margin-bottom: 1rem;

  > div {
    font-style: italic;
  }
`;
