import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import SwapInterface from "./components/SwapInterface";
import "./App.css";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Nudge</h1>
      <SwapInterface />
    </QueryClientProvider>
  );
};

export default App;
