import { useParams } from "react-router-dom"
import MainContainer from "../../components/common/MainContainer"
import UpdateDetails from "../../components/admin/UpdateDetails"

const UpdateDetailsPage = () => {
    const { id } = useParams<{id: string}>()

    if(!id) return <p>Invalid or missing ID</p>

  return (
    <>
      <MainContainer>
        <UpdateDetails id={id}/>
      </MainContainer>
    </>
  )
}

export default UpdateDetailsPage
