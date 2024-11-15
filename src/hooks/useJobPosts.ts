import { getJobs } from "../services/JobPostsServices";
import { InsertRequest } from "../utils/Types";
import { useEffect, useState } from "react";

export const useJobPosts = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [jobDetails, setJobDetails] = useState<InsertRequest[]>([])

    useEffect(() => {
        const JobsLists = async () => {
            setLoading(true)
            const result = await getJobs()
            if(result.success) {
                setJobDetails(result.jobDetails)
            }
            setLoading(false)
        }
        JobsLists()
    }, [])

    return {loading, jobDetails}
}
