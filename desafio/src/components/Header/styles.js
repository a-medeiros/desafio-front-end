import styled from 'styled-components';

export const Container = styled.div`
  background: #f0f0f0;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxAside = styled.div`
    justify-content: center;
    flex-wrap: wrap;
    background: white;
    position: absolute;
    top: 0;
    right: ${props => (props.active ? 0 : '-500px')};
    height: 100%;
    display: flex;
    flex: 1;
    width: 400px;
    transition: 0.7s;
    z-index: 1;
`;

export const CloseCartContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CartContainer = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  aligm-items: center;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: center;
`;
