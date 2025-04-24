import { useState, useCallback } from "react";

export default function useErrorHandler() {
  const [error, setError] = useState<string | null>(null);

  const handleError = useCallback((errorMessage: string) => {
    setError(errorMessage);
    console.error(errorMessage);
  }, []);

  return { error, handleError };
}
