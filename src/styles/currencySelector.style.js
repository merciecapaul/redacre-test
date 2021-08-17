import styled from "styled-components";

export const CurrencySelectorWrapper = styled.div`
  display: flex;
  margin: 2rem 0 0 0;

  > div {
    flex: 1;
    text-align: left;

    &.exchange-icon {
      text-align: center;
      padding-top: 1.5rem;
      cursor: pointer;
    }
  }
`;
