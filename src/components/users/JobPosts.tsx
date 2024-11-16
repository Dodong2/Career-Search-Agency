import React from "react"
import { useJobPosts } from "../../hooks/useJobPosts"

const JobPosts = () => {
    const {loading, details} = useJobPosts()
  return (
    <>
 <div>
    {loading && <p>Loading...</p>}
    {!loading && details.length === 0 && <p>No job posts available.</p>}
    <div className="details">
      {details.map((detail) => (
        <React.Fragment key={detail.id}>
            {/*details titles*/}
          <details className="details__container">
            <summary className="details__summary">
              <h2 className="details__title">
                <div>{detail.business_name}</div>  
                <div>{detail.work_positions}</div>
                <div>{detail.locations}</div>
              </h2>
            </summary>
          </details>
          {/*contents descriptions to */}
          <div className="details__desc">
            <div className="details__desc-inner">
                <div>{detail.descriptions}</div>
                <div>Slots: {detail.slots}</div>
                <div>Contact number: {detail.contact_number}</div>
              <div className="buttons">
                <button>Click</button>
                <button>Click</button>
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
