import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 400px;
  margin: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Quote = styled.p`
  font-size: 16px;
  font-style: italic;
  color: #555;
  margin-bottom: 20px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Name = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const Title = styled.p`
  font-size: 14px;
  color: #777;
  margin: 0;
`;

const JustTake = ({ quote, name, title }) => {
  return (
    <Card>
      <Quote>"{quote}"</Quote>
      <Profile>
        <img style={{width:"100px"}} src={'https://app.apollo.io/images/julian-malinak-photo.jpg'} alt={name} />
        <div style={{marginLeft:"10px"}}>
          <Name>{name}</Name>
          <Title>{title}</Title>
        </div>
      </Profile>
    </Card>
  );
};

export default JustTake;
