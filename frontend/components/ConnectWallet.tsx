"use client";

import { useState } from "react";
import useConnectWallet from "../hooks/useConnectWallet";

interface ConnectWalletProps {
  className?: string;
}

export default function ConnectWallet({ className = "" }: ConnectWalletProps) {
  const { walletConnected, walletAddress } = useConnectWallet();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      setIsConnecting(true);
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } catch (error) {
        console.error("User rejected connection", error);
      } finally {
        setIsConnecting(false);
      }
    } else {
      window.open("https://metamask.io/download/", "_blank");
    }
  };

  return (
    <div className={className}>
      {walletConnected ? (
        <div className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span className="text-sm font-medium text-gray-700">
            {walletAddress?.substring(0, 6)}...
            {walletAddress?.substring(walletAddress.length - 4)}
          </span>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          disabled={isConnecting}
          className={`flex items-center justify-center px-4 py-2 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors ${
            isConnecting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isConnecting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Connecting...
            </>
          ) : (
            "Connect Wallet"
          )}
        </button>
      )}
    </div>
  );
}
