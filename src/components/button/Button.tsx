import { FC, ReactNode } from "react";

export type TButtonProps = {
  children: ReactNode;
  type: "button" | "submit" | "reset";
  classProps: string;
  onClick?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  disabled?: boolean;
};

const Button: FC<TButtonProps> = ({
  children,
  type,
  classProps,
  onClick,
  disabled,
}) => {
  return (
    <button className={classProps} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
