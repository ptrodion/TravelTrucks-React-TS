import styled from 'styled-components';
import NotFoundBkg from '../../assets/img/NotFoundImage/NotFoundBkg.jpg';

export const BackgroundImageNotFound = styled.div`
  background-image: url('${NotFoundBkg}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: calc(100vh - 72px);
  position: relative;
`;

export const WrapperGoBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  width: 100px;
  border: 1px solid #8f6565;
  background-color: #e3c7c7;
  margin-bottom: 8px;
`;

export const WrapperGoBackList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  width: 234px;
  border: 1px solid #8f6565;
  background-color: #e3c7c7;
`;

export const WrapperNotFound = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.gaps.s};
`;

export const TextMessage404 = styled.p`
  font-weight: ${(props) => props.theme.font.weights.semiBold};
  font-size: ${(props) => props.theme.font.size.medium};
  line-height: ${(props) => props.theme.lineHeight.medium};
  color: ${(props) => props.theme.color.secondTextColor};
`;
