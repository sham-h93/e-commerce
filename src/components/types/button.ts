import { Color } from "../enums/enums";

export interface ButtonProps {
  width?: string;
  height?: string;
  color?: Color;
  text?: string;
  onClick: () => void;
  disabled?: false;
  children?: React.ReactNode;
}
