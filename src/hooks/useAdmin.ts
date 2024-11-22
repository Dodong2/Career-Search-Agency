/********** react library **********/
import { useEffect, useState } from "react";
/********** Services **********/
import { insertDetails, getDetails, deleteDetails, getPinkCollars, getGreenCollars, getWhiteCollars, getBlueCollars, getGreyCollars} from "../services/AdminServices";
import { InsertRequest, UpdateFormData } from "../utils/Types";

export const useAdmin = () => {
  const [details, setDetails] = useState<InsertRequest[]>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pink_collar, setPinkcollar] = useState<number | null>(null)
  const [green_collar, setGreencollar] = useState<number | null>(null) 
  const [white_collar, setWhitecollar] = useState<number | null>(null) 
  const [blue_collar, setBluecollar] = useState<number | null>(null) 
  const [grey_collar, setGreycollar] = useState<number | null>(null) 



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
  const fetchDetailToUpdate = async (id: string, setUpdateData: (data: UpdateFormData) => void) => {
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

        setUpdateData(detailsToEdit || {
          id: '',
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

//get pink collar
useEffect(() => {
  const getPinkCollar = async () => {
    setLoading(true)
    const result = await getPinkCollars()
    if(result.success){
      setPinkcollar(result.pink_collar)
    }
    setLoading(false)
  }
  getPinkCollar()
}, [])

//get green collar
useEffect(() => {
const getGreenCollar = async () => {
  setLoading(true)
  const result = await getGreenCollars()
  if(result.success) {
    setGreencollar(result.green_collar)
  }
  setLoading(false)
}
getGreenCollar()
}, [])


//get white collars
useEffect(() => {
 const getWhiteCollar = async () => {
  setLoading(true)
  const result = await getWhiteCollars()
  if(result.success) {
    setWhitecollar(result.white_collar)
  }
  setLoading(false)
 }
 getWhiteCollar()
}, [])

//get blue collars
useEffect(() => {
  const getBlueCollar = async () => {
    setLoading(true)
    const result = await getBlueCollars()
    if(result.success) {
      setBluecollar(result.blue_collar)
    }
    setLoading(false)
  }
  getBlueCollar()
}, [])

useEffect(() => {
  const getGreyCollar = async() => {
    setLoading(true)
    const result = await getGreyCollars()
    if(result.success) {
      setGreycollar(result.grey_collar)
    }
    setLoading(false)
  }
  getGreyCollar()
}, [])


  return { Insert, loading, error, details, removeDetails, fetchDetailToUpdate, pink_collar, green_collar, white_collar, blue_collar, grey_collar };
};
