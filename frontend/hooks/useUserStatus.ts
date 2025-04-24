import { useState, useEffect } from "react";
import useCurrentUser from "./useCurrentUser";

export default function useUserStatus() {
  const [status, setStatus] = useState<string | null>(null);
  const userDetails = useCurrentUser();

  useEffect(() => {
    if (userDetails) {
      // Determine status based on the `status` field from the contract
      setStatus(userDetails.status === 2 ? "Active" : "Pending"); // Assuming 2 represents Active
    }
  }, [userDetails]);

  return status;
}
