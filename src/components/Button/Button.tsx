import { IButton } from './type';

const InnerButton = (props: IButton) => {
  const { innerContent, type, onClick } = props;
  return (
    <button type={type} onClick={onClick}>
      {innerContent}
    </button>
  );
};

export default InnerButton;
