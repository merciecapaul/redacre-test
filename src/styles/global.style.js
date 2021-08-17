import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing: border-box;
       font-family: 'Open Sans', sans-serif;
       font-size: 18px;
   }
   label {
       font-size: 14px;
       display: block;
       text-align: left;
       margin-bottom: .25rem;
   }
   input,
   select {
        padding: .25rem .5rem;
        width: 100%;
        border-radius: 4px;
        border: 1px solid grey;
   }
   #root {
       margin: 0 auto;
   }
`;
