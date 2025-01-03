export enum ButtonTypes {
  BUTTON = 'button',
  SUBMIT = 'submit',
}

export interface IButton {
  innerContent: JSX.Element | string;
  type?: ButtonTypes;
  onClick?: () => void;
}
