/********** react library **********/
import { useState } from "react"
/********** Hooks **********/
import { useAdmin } from "../../hooks/useAdmin"

const PostDetails = () => {
    const [business_name, setBusiness_name] = useState('')
    const [descriptions, setDescriptions] = useState('')
    const [work_positions, setWork_positions] = useState('')
    const [company_email, setCompany_email] = useState('')
    const [contact_number, setContact_number] = useState('')
    const [slots, setSlots] = useState('')
    const [locations, setLocations] = useState('')
    const {Insert, loading, error} = useAdmin()

    const handleInsert = async (e: React.FormEvent) => {
        e.preventDefault()
        //variable na naka-aarray para sama-sama
        const details = {
            business_name, 
            descriptions, 
            work_positions, 
            company_email, 
            contact_number, 
            slots, 
            locations
        }

        const result = await Insert(details)
        //if mag success
        if(result.success) {
            setBusiness_name('')
            setDescriptions('')
            setWork_positions('')
            setCompany_email('')
            setContact_number('')
            setSlots('')
            setLocations('')
        } else {
            alert('Failed to post')
        }
        
    }

  return (
    <>
      <div>
        <form onSubmit={handleInsert}>
        <input type="text" placeholder="Business/Company name" value={business_name} onChange={(e) => setBusiness_name(e.target.value)} required/>
        <input type="text" placeholder="descriptions" value={descriptions} onChange={(e) => setDescriptions(e.target.value)} required/>
        <input type="text" placeholder="Work Positions" value={work_positions} onChange={(e) => setWork_positions(e.target.value)} required/>
        <input type="text" placeholder="Company Email" value={company_email} onChange={(e) => setCompany_email(e.target.value)} required/>
        <input type="text" placeholder="Contact Number" value={contact_number} onChange={(e) => setContact_number(e.target.value)} required/>
        <input type="text" placeholder="Slots" value={slots} onChange={(e) => setSlots(e.target.value)} required/>
        <input type="text" placeholder="locations" value={locations} onChange={(e) => setLocations(e.target.value)} required/>
        <button type="submit" disabled={loading}> {loading ? 'Posting...' : 'Post'}</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </>
  )
}

export default PostDetails
