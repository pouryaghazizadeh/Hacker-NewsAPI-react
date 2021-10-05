import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Cards = styled.div`
  width: 70vw;
  height: 120px;
  background-color: #0047ab;
  margin: 30px;
  box-shadow:  2px 2px 9px rgba(0, 0, 0, 0.8);
  @media screen and (max-width: 1200px) {
    height: 140px;
  }
  @media screen and (max-width: 900px) {
    height: 200px;
    border-radius: 16px;

  }
  @media screen and (max-width: 700px) {

    flex-direction: column;
  }
  @media screen and (max-width: 700px) {
    height: 250px;
    /* flex-direction: column; */
  }
`;

export const Title = styled.a`
  height: 100px;
  background-color: blue;
  text-align: center;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;
export const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  margin-top: 13px;
  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Items = styled.ul`
  list-style: none;
width: 300px;

  margin-right: 60px;
  margin-left: 5px;
  @media screen and (max-width: 700px) {
    margin-right: 0px;
  }
`;
export const Detail = styled.li`
  font-size: x-large;
  color: #fff;
`;
