import { Color } from "../enums/enums";

export interface ButtonProps {
  color?: Color;
  text?: string;
  onClick: () => void;
  disabled?: false;
  children?: React.ReactNode;
}
