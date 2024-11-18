/********** React Library **********/
import { Link } from "react-router-dom";
/********** Hooks **********/
import { useAdmin } from "../../hooks/useAdmin"

const ViewDetails = () => {
    const { details, loading, error, removeDetails } = useAdmin();

  return (
    <>
    {/* Validation kung error */}
       <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <table >
        {/* table header */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Business Name</th>
            <th>Descriptions</th>
            <th>Work Positions</th>
            <th>Company Email</th>
            <th>Contact Number</th>
            <th>Slots</th>
            <th>Locations</th>
            <th>Collar Job</th>
            <th>Action</th>
          </tr>
        </thead>
            {/* table body */}
        <tbody>
          {details && details.length > 0 ? (
            details.map(detail => (
              <tr key={detail.id}>
                <td>{detail.id}</td>
                <td>{detail.business_name}</td>
                <td>{detail.descriptions}</td>
                <td>{detail.work_positions}</td>
                <td>{detail.company_email}</td>
                <td>{detail.contact_number}</td>
                <td>{detail.slots}</td>
                <td>{detail.locations}</td>
                <td>{detail.collar}</td>
                <td><Link to={`/update/${detail.id}`}><button>edit</button></Link>
                <button onClick={() => removeDetails(detail.id)}>delete</button></td>
              </tr>
            ))
          ) : (
            <tr>
                {/* validation para kung walang details */}
              <td colSpan={8}>No details available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default ViewDetails






