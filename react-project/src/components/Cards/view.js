import styled from "styled-components";

// this is a div that hav all cards
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
//
export const Cards = styled.div`
  width: 70vw;
  height: 120px;
  background-color: #0047ab;
  margin: 30px;
  box-shadow: 2px 5px 9px rgba(0, 0, 0, 0.8);
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

  }
  &:hover {
    transition: all 0.4s ease 0s;
    transform: scale(1.1);
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
