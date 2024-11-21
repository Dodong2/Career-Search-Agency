/********** library **********/
import { useState } from "react";
/********** types **********/
import { InsertRequest, UpdateFormData } from "../utils/Types";
/********** Hooks **********/
import { useAdmin } from "./useAdmin";
import {updateDetails} from "../services/AdminServices";

//hooks and functions para sa PostDetails.tsx
export const useHandleInsert = () => {
  const [business_name, setBusiness_name] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [work_positions, setWork_positions] = useState("");
  const [company_email, setCompany_email] = useState("");
  const [contact_number, setContact_number] = useState("");
  const [slots, setSlots] = useState("");
  const [locations, setLocations] = useState("");
  const [collar, setCollar] = useState("");

  const { Insert, loading, error } = useAdmin();

  const handleInsert = async (e: React.FormEvent) => {
    e.preventDefault();

    const details: InsertRequest = {
      id:"",
      business_name,
      descriptions,
      work_positions,
      company_email,
      contact_number,
      slots,
      locations,
      collar,
    };

    const result = await Insert(details);
    if (result.success) {
      setBusiness_name("");
      setDescriptions("");
      setWork_positions("");
      setCompany_email("");
      setContact_number("");
      setSlots("");
      setLocations("");
      setCollar("");
    } else {
      alert("Failed to post");
    }
  };

  return {
    handleInsert,
    business_name,
    setBusiness_name,
    descriptions,
    setDescriptions,
    work_positions,
    setWork_positions,
    company_email,
    setCompany_email,
    contact_number,
    setContact_number,
    slots,
    setSlots,
    locations,
    setLocations,
    collar,
    setCollar,
    loading,
    error,
  };
};

export const useHandleUpdate = () => {
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

    /* para maaccess yung update na value means mapapaltan pag wala nito hindi ma-access*/
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      // console.log(`Updating ${name} with value: ${value}`)
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


    return {
      updateData,
      setUpdateData,
      handleChange,
      handleSubmit
    }
}
