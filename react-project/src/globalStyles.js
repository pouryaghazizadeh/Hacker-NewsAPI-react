import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
.App{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
}
.container-card{
    margin-top: 30px;

}
.card{
    background: red;
    margin: 10px;
    width: 70vw;
    

}
.fg{
margin-top: 19px;


}
.w{
    margin-top: 10px;
}
`;

export default GlobalStyle;
