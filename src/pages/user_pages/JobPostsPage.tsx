/********** Components **********/
import MainContainer from "../../components/common/MainContainer"
import JobPosts from "../../components/users/JobPosts"

const JobPostsPage = () => {
  return (
    <>
    <MainContainer>
      <div className="jobpost-container">
        <h1>Job Post page welcome</h1>
        <JobPosts/>
      </div>
      </MainContainer>
    </>
  )
}

export default JobPostsPage
