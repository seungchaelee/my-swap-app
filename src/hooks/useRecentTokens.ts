import React, { useState, useEffect } from "react";

const useRecentTokens = () => {
  const [recentTokens, setRecentTokens] = useState<string[]>([]);

  useEffect(() => {
    const loadedTokens = localStorage.getItem("recentTokens");
    if (loadedTokens) {
      setRecentTokens(JSON.parse(loadedTokens));
    }
  }, []);

  const updateRecentTokens = (token: string) => {
    const MAX_RECENT_TOKENS = 7;
    const updatedTokens = [token, ...recentTokens.filter((t) => t !== token)].slice(0, MAX_RECENT_TOKENS);
    localStorage.setItem("recentTokens", JSON.stringify(updatedTokens));
    setRecentTokens(updatedTokens);
  };

  return { recentTokens, updateRecentTokens };
};

export default useRecentTokens;
