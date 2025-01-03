import { IButton } from './type';

const InnerButton = (props: IButton) => {
  const { innerContent, type, onClick, className } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={['btn', className].join(' ')}
    >
      {innerContent}
    </button>
  );
};

export default InnerButton;
