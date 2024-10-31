import { InsertRequest } from "../utils/Types"

//Insert Details
export const insertDetails = async(data: InsertRequest) => {
    try {
    const formData = new FormData()
    formData.append('business_name', data.business_name)
    formData.append('descriptions', data.descriptions)
    formData.append('work_positions', data.work_positions)
    formData.append('company_email', data.company_email)
    formData.append('contact_number', data.contact_number)
    formData.append('slots', data.slots)
    formData.append('locations', data.locations)

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

//Delete
export const deleteDetails = async(id: string) => {
    try {
        const formData = new FormData()
        formData.append('id', id)
        const response = await fetch('http://localhost/Career Search Agency/admin.php?action=delete', {
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

//Update
export const updateDetails = async (data: InsertRequest) => {
    try {
        const formData = new FormData();
        formData.append('id', data.id);
        formData.append('business_name', data.business_name)
        formData.append('descriptions', data.descriptions)
        formData.append('work_positions', data.work_positions)
        formData.append('company_email', data.company_email)
        formData.append('contact_number', data.contact_number)
        formData.append('slots', data.slots)
        formData.append('locations', data.locations)

        const response = await fetch('http://localhost/Career Search Agency/admin.php?action=update', {
            method: 'POST',
            body: formData
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const result = await response.json()
        return result

    } catch (error) {
        console.log(error)
        throw error
    }
};

