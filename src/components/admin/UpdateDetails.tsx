import { UpdateDetailsProps } from "../../utils/Types"
import { useAdmin } from "../../hooks/useAdmin"
import { useEffect, useState } from "react"

const UpdateDetails: React.FC<UpdateDetailsProps> = ({ id }) => {
  const [loading, setLoading] = useState(true)
    const {updateData, handleChange, handleSubmit, fetchDetailToUpdate} = useAdmin()

    useEffect(() => {
      if (id && loading) {
          fetchDetailToUpdate(id)
          setLoading(false)
      }
  }, [fetchDetailToUpdate, id, loading])

    if(!updateData) return <p>Loading...</p>

  return (
    <>
    <div>
        <form onSubmit={(e) =>{ e.preventDefault(); handleSubmit()}}>
        <input type="text" placeholder="id" value={updateData.id} name="id" onChange={handleChange} required/>
        <input type="text" placeholder="Business/Company name" name="business_name" value={updateData.business_name} onChange={handleChange} required/>
        <input type="text" placeholder="descriptions" name="descriptions" value={updateData.descriptions} onChange={handleChange} required/>
        <input type="text" placeholder="Work Positions" name="work_positions" value={updateData.work_positions} onChange={handleChange} required/>
        <input type="email" placeholder="Company Email" name="company_email" value={updateData.company_email} onChange={handleChange} required/>
        <input type="number" placeholder="Contact Number" name="contact_number" value={updateData.contact_number} onChange={handleChange} required/>
        <input type="number" placeholder="Slots" name="slots" value={updateData.slots} onChange={handleChange} required/>
        <input type="text" placeholder="collar" name="collar" value={updateData.collar} onChange={handleChange} required/>
        <input type="text" placeholder="locations" name="locations" value={updateData.locations} onChange={handleChange}  required/>
        <button type="submit">Enter</button>
        </form>
    </div>
    </>
  )
}

export default UpdateDetails
