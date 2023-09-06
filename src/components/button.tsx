import { Color } from "./enums/enums";
import { ButtonProps } from "./types/button";

const Button = ({
  width,
  height,
  color,
  text,
  onClick,
  disabled,
  children,
}: ButtonProps) => {
  let bgColor;
  switch (color) {
    case Color.Primary: {
      bgColor = "bg-primary-color text-white-color";
      break;
    }
    case Color.Success: {
      bgColor = "bg-success-color text-white-color";
      break;
    }
    case Color.Error: {
      bgColor = "bg-error-color text-white-color";
      break;
    }
    case Color.Dark: {
      bgColor = "bg-dark-background-color text-white-color";
      break;
    }

    default: {
      bgColor = "bg-primary-color text-white-color";
      break;
    }
  }

  return (
    <button
      className={`${bgColor} ${width} ${height} text-base px-4 py-2 h-10 flex flex-row gap-3 items-center justify-center rounded-lg`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <span>{text}</span>
    </button>
  );
};

export default Button;
