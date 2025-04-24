import { useMemo } from "react";
import { ethers } from "ethers";
import contractAddress from "../contracts/contract-address.json";

export default function useContract(abi: ethers.InterfaceAbi) {
  const supplyChainAddress = contractAddress.SupplyChain;

  const contract = useMemo(() => {
    if (typeof window !== "undefined" && window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      // Create a contract with provider first (read-only)
      const contract = new ethers.Contract(supplyChainAddress, abi, provider);

      // Return an object with methods to get signer-connected contract when needed
      return {
        read: contract,
        write: async () => {
          const signer = await provider.getSigner();
          return contract.connect(signer);
        },
      };
    }
    return null;
  }, [abi, supplyChainAddress]);

  return contract;
}
