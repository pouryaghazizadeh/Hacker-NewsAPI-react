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
    /* margin-top: 30px; */
    height: 100%;


}
.card{
    background-color: green;
    width: 70vw;
    height: 200px;
    margin: 60ox;
}
.fg{
margin-top: 19px;


}
.w{
    margin-top: 10px;
}
.h{
    display: flex;
    flex-wrap: wrap;
    /* position: absolute; */
    /* top: 19px; */
    /* padding: 20px; */
}
.d{

}
`;

export default GlobalStyle;
