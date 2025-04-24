import { useState, useEffect } from "react";
import { ethers } from "ethers";
import contractAddress from "../contracts/contract-address.json";
import SupplyChainABI from "../contracts/SupplyChainABI.json";

// Define the User type based on the Solidity contract
interface User {
  wallet: string;
  name: string;
  place: string;
  role: number; // Role is represented as a uint8 in the contract
  status: number; // UserStatus is represented as a uint8 in the contract
}

export default function useCurrentUser() {
  const [userDetails, setUserDetails] = useState<User | null>(null);
  const supplyChainAddress = contractAddress.SupplyChain;

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (typeof window !== "undefined" && window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          await provider.send("eth_requestAccounts", []);
          const signer = await provider.getSigner();
          const contract = new ethers.Contract(
            supplyChainAddress,
            SupplyChainABI,
            signer
          );
          const details = await contract.getUserDetails();
          setUserDetails({
            wallet: details.wallet,
            name: details.name,
            place: details.place,
            role: details.role,
            status: details.status,
          });
        } catch (error) {
          console.error("Failed to fetch user details:", error);
        }
      }
    };

    fetchUserDetails();
  }, [supplyChainAddress]);

  return userDetails;
}
