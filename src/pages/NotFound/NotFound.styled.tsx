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

export const WrapperNotFound = styled.div`
  padding: 10px;
`;

export const TextMessage404 = styled.p`
  font-weight: ${(props) => props.theme.font.weights.semiBold};
  font-size: ${(props) => props.theme.font.size.medium};
  line-height: ${(props) => props.theme.lineHeight.medium};
  color: ${(props) => props.theme.color.secondTextColor};
`;
