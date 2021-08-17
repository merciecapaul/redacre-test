import styled from "styled-components";

export const WalletWrapper = styled.div`
  display: flex;
  margin: 1rem 0 0 0;

  > div {
    flex: 1;
    text-align: left;
    font-size: .8em;
    color: gray;

    &:last-child {
      text-align: right;

      label {
        text-align: right;
      }
    }
  }
`;

export const NegativeAmount = styled.div`
  color: red;
`

export const PositiveAmount = styled.div`
  color: green;
`
