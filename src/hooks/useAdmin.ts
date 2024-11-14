/********** react library **********/
import { useEffect, useState } from "react";
/********** Services **********/
import { insertDetails, getDetails, deleteDetails, updateDetails } from "../services/AdminServices";
import { InsertRequest, UpdateFormData } from "../utils/Types";

export const useAdmin = () => {
  const [details, setDetails] = useState<InsertRequest[]>([])
  const [updateData, setUpdateData] = useState<UpdateFormData | null>({
    id: '',
    business_name: '',
    descriptions: '',
    work_positions: '',
    company_email: '',
    contact_number: '',
    slots: '',
    locations: '',
    collar: ''
  })
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
  const fetchDetailToUpdate = async (id: string) => {
    if (!id || id === "id") {
      console.error("Invalid ID passed:", id);
      return;
  }
    setLoading(true);
    try {
        const response = await getDetails();
        const data = response.details; // Access the 'details' array
        if (Array.isArray(data)) {
            const detailsToEdit = data.find((detail: UpdateFormData) => String(detail.id) === String(id));

            setUpdateData(detailsToEdit || { id: '',
              business_name: '',
              descriptions: '',
              work_positions: '',
              company_email: '',
              contact_number: '',
              slots: '',
              locations: '',
              collar: ''
            });
        } else {
            console.error("Data is not an array:", data);
        }
    } catch (error) {
        console.error("Failed to fetch detail for update:", error);
    } finally {
        setLoading(false);
    }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} with value: ${value}`)
    setUpdateData(prevData => prevData ? { ...prevData, [name]: value } : null);
};

const handleSubmit = async () => {
    if (updateData) {
        try {
            await updateDetails(updateData);
            alert("Details updated successfully");
        } catch (error) {
            console.error("Failed to update details:", error);
        }
    }
};

  return { Insert, loading, error, details, removeDetails, updateData, handleChange, handleSubmit, fetchDetailToUpdate };
};
