import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h2``;

const ReturnBackButton = styled.button`
  border-radius: 10px;
  background-color: #5558fa;
  height: 50px;
  border: none;
  color: white;
  transition: all ease 0.3s;

  :hover {
    background-color: #1c20fe;
    cursor: pointer;
  }
`;

export default function NotFound(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Container>
      <NotFoundWrapper>
        <Title>Resource Not Found</Title>
        <ReturnBackButton onClick={() => navigate(-1)}>
          Return Back
        </ReturnBackButton>
      </NotFoundWrapper>
    </Container>
  );
}
