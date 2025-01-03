import InnerButton from '../../components/Button/Button';
import {
  BackgroundImageNotFound,
  TextMessage404,
  WrapperNotFound,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <BackgroundImageNotFound>
      <WrapperNotFound>
        <TextMessage404>
          Oops! Something went wrong, this page does not exist
        </TextMessage404>
        <div>
          <InnerButton
            innerContent={'Go Back'}
            onClick={() => window.history.back()}
          />
          <InnerButton
            innerContent={'Back to the list of vehicles'}
            onClick={() => (window.location.href = '/vehicles')}
          />
        </div>
      </WrapperNotFound>
    </BackgroundImageNotFound>
  );
};

export default NotFound;
