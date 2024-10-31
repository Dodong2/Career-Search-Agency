//Types ng insert details
 export interface InsertRequest {
    id: string
    business_name:string
    descriptions:string
    work_positions:string
    company_email:string
    contact_number:string
    slots:string
    locations:string
}


//Insert Details
export const insertDetails = async({ business_name, descriptions, work_positions, company_email, contact_number, slots, locations}: InsertRequest) => {
    try {
    const formData = new FormData()
    formData.append('business_name', business_name)
    formData.append('descriptions', descriptions)
    formData.append('work_positions', work_positions)
    formData.append('company_email', company_email)
    formData.append('contact_number', contact_number)
    formData.append('slots', slots)
    formData.append('locations', locations)

    const response = await fetch('http://localhost/Career Search Agency/admin.php?action=insert', {
        method: 'POST',
        body: formData
    })

    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result

    } catch (error) {
            console.log(error)
            throw error
    }

}

//Get details
export const getDetails = async() => {
    try {
        const response = await fetch('http://localhost/Career Search Agency/admin.php?action=get')
        
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        // console.log(result);
        return result
    } catch (error) {
        console.log(error)
        throw error
    }
}

