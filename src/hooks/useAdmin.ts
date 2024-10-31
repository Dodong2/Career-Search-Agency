/********** react library **********/
import { useEffect, useState } from "react";
/********** Services **********/
import { insertDetails, getDetails, deleteDetails, updateDetails } from "../services/AdminServices";
import { InsertRequest, UpdateFormData } from "../utils/Types";

export const useAdmin = () => {
  const [details, setDetails] = useState<InsertRequest[]>([])
  const [formData, setFormData] = useState<UpdateFormData | null>(null)
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

  //delete hooks
  const removeDetails = async (id: string) => {
    const result = await deleteDetails(id)
      if (result.success) {
        setDetails(prev => prev.filter(detail => detail.id !== id))
      }
  }

  //update hooks
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getDetails()
        const detailToEdit = data.find((detail: UpdateFormData) => detail.id === id)
        setFormData(detailToEdit || null)
      } catch (error) {
        console.error("Failed to fetch details:", error)
      }
    }
    fetchDetails()
  }, [id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => prevData ? { ...prevData, [name]: value } : null);
};

const handleSubmit = async () => {
    if (formData) {
        try {
            await updateDetails(formData);
            alert("Details updated successfully");
        } catch (error) {
            console.error("Failed to update details:", error);
        }
    }
};

  return { Insert, loading, error, details, removeDetails, formData };
};
