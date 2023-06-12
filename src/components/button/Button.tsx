import { FC, ReactNode } from "react";

export type TButtonProps = {
  children: ReactNode;
  type: "button" | "submit" | "reset";
  classProps: string;
  onClick?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
};

const Button: FC<TButtonProps> = ({ children, type, classProps, onClick }) => {
  return (
    <button className={classProps} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
