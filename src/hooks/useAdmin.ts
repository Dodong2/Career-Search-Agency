/********** react library **********/
import { useState } from "react";
/********** Services **********/
import { insertDetails, InsertRequest } from "../services/AdminServices";

export const useAdmin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const Insert = async (details: InsertRequest) => {
    setLoading(true);
    setError(null);

    try {
      const result = await insertDetails(details);
      return result;
    } catch (error) {
      setError((error as Error).message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { Insert, loading, error };
};
