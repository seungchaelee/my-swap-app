import React from "react";

interface SwapButtonProps {
  onSwap: () => void; // Swap execution function
}
const SwapButton: React.FC<SwapButtonProps> = ({ onSwap }) => {
  return <button onClick={onSwap}>Swap</button>;
};

export default SwapButton;
