/********** react library **********/
/********** Hooks **********/
import { useHandleInsert } from "../../hooks/AdminFunctions"

const PostDetails = () => {
      
  const {
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
  } = useHandleInsert()
        
        
    

  return (
    <>
      <div>
        <form onSubmit={handleInsert}>
        <input type="text" placeholder="Business/Company name" value={business_name} onChange={(e) => setBusiness_name(e.target.value)} required/>
        <input type="text" placeholder="descriptions" value={descriptions} onChange={(e) => setDescriptions(e.target.value)} required/>
        <input type="text" placeholder="Work Positions" value={work_positions} onChange={(e) => setWork_positions(e.target.value)} required/>
        <input type="email" placeholder="Company Email" value={company_email} onChange={(e) => setCompany_email(e.target.value)} required/>
        <input type="number" placeholder="Contact Number" value={contact_number} onChange={(e) => setContact_number(e.target.value)} required/>
        <input type="number" placeholder="Slots" value={slots} onChange={(e) => setSlots(e.target.value)} required/>
        <input type="text" placeholder="collar" value={collar} onChange={(e) => setCollar(e.target.value)} required/>
        <input type="text" placeholder="locations" value={locations} onChange={(e) => setLocations(e.target.value)} required/>
        <button type="submit" disabled={loading}> {loading ? 'Posting...' : 'Post'}</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </>
  )
}

export default PostDetails
