import { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractAddress from "../contracts/contract-address.json";

export default function useRoleGuard(allowedRoles: number[]) {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkUserRole = async () => {
      try {
        if (typeof window !== "undefined" && window.ethereum) {
          const provider = new ethers.BrowserProvider(window.ethereum);
          await provider.send("eth_requestAccounts", []);
          const signer = await provider.getSigner();

          // Define minimal ABI for getting user details
          const abi = [
            "function getUserDetails() public view returns (tuple(address wallet, string name, string place, uint8 role))",
          ];

          const contract = new ethers.Contract(
            contractAddress.SupplyChain,
            abi,
            signer
          );

          // Get user details to check role
          const details = await contract.getUserDetails();

          if (allowedRoles.includes(details.role)) {
            setIsAuthorized(true);
          } else {
            setIsAuthorized(false);
          }
        }
      } catch (err) {
        console.error("Error checking user role:", err);
        setIsAuthorized(false);
      }
    };

    checkUserRole();
  }, [allowedRoles]);

  return isAuthorized;
}
