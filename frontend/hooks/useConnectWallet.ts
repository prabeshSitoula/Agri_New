import { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function useConnectWallet() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    const connectWallet = async () => {
      if (typeof window !== "undefined" && window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          await provider.send("eth_requestAccounts", []);
          const signer = await provider.getSigner();
          const address = await signer.getAddress();
          setWalletAddress(address);
          setWalletConnected(true);
        } catch (error) {
          console.error("Failed to connect wallet:", error);
        }
      }
    };

    connectWallet();
  }, []);

  return { walletConnected, walletAddress };
}
