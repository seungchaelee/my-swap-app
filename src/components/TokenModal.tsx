import React, { useState } from "react";
import TokenButton from "./TokenButton";
import useRecentTokens from "../hooks/useRecentTokens";

interface TokenModalProps {
  onTokenSelect: (token: string) => void;
  onClose: () => void;
}

const TokenModal: React.FC<TokenModalProps> = ({ onTokenSelect, onClose }) => {
  const coins: string[] = [
    "ethereum",
    "tether",
    "usd-coin",
    "dai",
    "aave",
    "bitcoin",
    "axie-infinity",
    "compound-coin",
    "curve-dao-token",
    "ethereum-name-service",
  ];
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { recentTokens, updateRecentTokens } = useRecentTokens();

  const handleTokenSelect = (token: string) => {
    updateRecentTokens(token);
    onTokenSelect(token);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="token-modal-overlay">
      <div className="token-modal">
        <div className="token-modal-header">
          <input
            className="token-search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="이름 검색"
          />
          <button className="token-modal-close" onClick={onClose}>
            X
          </button>
        </div>
        <div>최근 목록</div>
        <div className="recent-tokens">
          {recentTokens.map((token) => (
            <TokenButton
              key={token}
              token={token}
              onSelect={handleTokenSelect}
            />
          ))}
        </div>
        <div>토큰 목록</div>
        <div className="token-list">
          {filteredCoins.map((token) => (
            <TokenButton
              key={token}
              token={token}
              onSelect={handleTokenSelect}
            />
          ))}
        </div>
        <button className="swap-button" onClick={() => alert("준비 중입니다.")}>
          토큰 목록 관리
        </button>
      </div>
    </div>
  );
};

export default TokenModal;
