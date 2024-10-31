/********** react library **********/
import { useEffect, useState } from "react";
/********** Services **********/
import { insertDetails, InsertRequest, getDetails } from "../services/AdminServices";

export const useAdmin = () => {
  const [details, setDetails] = useState<InsertRequest[]>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  //get hooks
  useEffect(() => {
    const PostDetails = async () => {
        setLoading(true);
        const result = await getDetails();
        if (result.success) {
            setDetails(result.details); 
        }
        setLoading(false);
    };
    PostDetails();
}, []);

  //insert hooks
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

  return { Insert, loading, error, details };
};
