
/* pang get ng mga jobs details */
export const getJobs = async () => {
    try {
        const response = await fetch('http://localhost/Career Search Agency/admin.php?action=get')
        
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        console.log("Fetched data:", result);
        return result

    } catch (error) {
        console.error("Fetch error:", error);
        return { success: false, jobDetails: [] }; // Provide a fallback response
    }
} 
