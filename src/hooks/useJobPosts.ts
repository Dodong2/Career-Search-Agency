/********** Services **********/
import { getJobs } from "../services/JobPostsServices";
import { InsertRequest } from "../utils/Types";
import { useEffect, useState } from "react";

export const useJobPosts = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [details, setDetails] = useState<InsertRequest[]>([])

    //get job posts
    useEffect(() => {
        const JobsLists = async () => {
            setLoading(true)
            const result = await getJobs()
            if(result.success) {
                setDetails(result.details)
            }
            setLoading(false)
        }
        JobsLists()
    }, [])

    return {loading, details}
}
