import InnerButton from '../../components/Button/Button';
import {
  BackgroundImageNotFound,
  TextMessage404,
  WrapperGoBack,
  WrapperGoBackList,
  WrapperNotFound,
} from './NotFound.styled';
import { IoMdArrowBack } from 'react-icons/io';

const NotFound = () => {
  return (
    <BackgroundImageNotFound>
      <WrapperNotFound>
        <TextMessage404>
          Oops! Something went wrong, this page does not exist
        </TextMessage404>
        <div>
          <WrapperGoBack>
            <IoMdArrowBack />
            <InnerButton
              innerContent={'Go Back'}
              onClick={() => window.history.back()}
            />
          </WrapperGoBack>
          <WrapperGoBackList>
            <IoMdArrowBack />
            <InnerButton
              innerContent={'Back to the list of vehicles'}
              onClick={() => (window.location.href = '/vehicles')}
            />
          </WrapperGoBackList>
        </div>
      </WrapperNotFound>
    </BackgroundImageNotFound>
  );
};

export default NotFound;
