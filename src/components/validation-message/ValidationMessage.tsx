import { FC } from "react";

const ValidationMessage: FC = ({ children }) => {
  return <p className="text-danger pt-2">{children}</p>;
};

export default ValidationMessage;
