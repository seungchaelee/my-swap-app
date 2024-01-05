import React from "react";

interface TokenButtonProps {
  token: string;
  onSelect: (token: string) => void;
}

const TokenButton: React.FC<TokenButtonProps> = ({ token, onSelect }) => (
  <button className="token-button" onClick={() => onSelect(token)}>
    {token}
  </button>
);

export default TokenButton;
