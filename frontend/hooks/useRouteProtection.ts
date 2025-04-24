import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useRoleGuard from "./useRoleGuard";

export default function useRouteProtection(allowedRoles: number[]) {
  const router = useRouter();
  const isAuthorized = useRoleGuard(allowedRoles);

  useEffect(() => {
    if (!isAuthorized) {
      router.push("/unauthorized");
    }
  }, [isAuthorized, router]);
}
