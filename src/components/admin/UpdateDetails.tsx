import { UpdateDetailsProps } from "../../utils/Types"
import { useAdmin } from "../../hooks/useAdmin"
import { useEffect } from "react"

const UpdateDetails: React.FC<UpdateDetailsProps> = ({ id }) => {
    const {updateData, handleChange, handleSubmit, fetchDetailToUpdate} = useAdmin()

    useEffect(() => {
        fetchDetailToUpdate(id)
    }, [id, fetchDetailToUpdate])

    if(!updateData) return <p>Loading...</p>

  return (
    <>
    <div>
        <form onSubmit={(e) =>{ e.preventDefault(); handleSubmit()}}>
        <input type="text" placeholder="Business/Company name" value={updateData.business_name} onChange={handleChange} required/>
        <input type="text" placeholder="descriptions" value={updateData.descriptions} onChange={handleChange} required/>
        <input type="text" placeholder="Work Positions" value={updateData.work_positions} onChange={handleChange} required/>
        <input type="email" placeholder="Company Email" value={updateData.company_email} onChange={handleChange} required/>
        <input type="number" placeholder="Contact Number" value={updateData.contact_number} onChange={handleChange} required/>
        <input type="number" placeholder="Slots" value={updateData.slots} onChange={handleChange} required/>
        <input type="text" placeholder="collar" value={updateData.collar} onChange={handleChange} required/>
        <input type="text" placeholder="locations" value={updateData.locations} onChange={handleChange}  required/>
        <button type="submit">Enter</button>
        </form>
    </div>
    </>
  )
}

export default UpdateDetails
