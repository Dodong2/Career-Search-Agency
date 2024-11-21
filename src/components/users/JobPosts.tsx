/********** React Library **********/
import React from "react"
import { useState } from "react"
/********** Hooks **********/
import { useJobPosts } from "../../hooks/useJobPosts"
import { handleSendResume, handleOpenMap } from "../../hooks/UsersFunctions"
/********** Component **********/
import SearchBar from "../common/SearchBar"
const JobPosts = () => {
    const {loading, details} = useJobPosts()
    const [searchQuery, setSearchQuery] = useState<string>("");

    //filtered details para sa search functions
    const filteredDetails = details.filter((detail) =>
      [detail.business_name, detail.work_positions, detail.collar]
        .join(" ") // Combine all searchable fields
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    
    

  return (
    <>
    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
 <div>
    {/* Validations kung mabagal yung request or internet */}
    {loading && <p>Loading...</p>}
    {/* validations para kung walanng jobs */}
    {!loading && details.length === 0 && <p>No job posts available.</p>}
    {/* validations kung hindi existing yung search jobs */}
    {!loading && searchQuery && filteredDetails.length === 0 && (
      <div className="no-results">
      <p>No matching job posts exist.</p>
    </div>
    )}

    <div className="details">
      {filteredDetails.map((detail) => (
        <React.Fragment key={detail.id}>
            {/*details titles*/}
          <details className="details__container">
            <summary className="details__summary">
              <h2 className="details__title">
                <div>{detail.business_name}</div>  
                <div>{detail.work_positions}</div>
                <div>{detail.collar}</div>
              </h2>
            </summary>
          </details>
          {/*contents descriptions to */}
          <div className="details__desc">
            <div className="details__desc-inner">
                <div>{detail.descriptions}/n</div>
                <div>Email: {detail.company_email}</div>
                <div>Locations: {detail.locations}</div>
                <div>Contact number: {detail.contact_number}</div>
              <div className="buttons">
                <button onClick={() => handleOpenMap(detail.locations)}>See Locations</button>
                <button onClick={() => handleSendResume(detail.company_email)}>Send Resume</button>
              </div>
            </div>
          </div><br/>
        </React.Fragment>
      ))}
    </div>

</div>
    </>
  )
}

export default JobPosts
