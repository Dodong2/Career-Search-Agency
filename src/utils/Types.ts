//Types ng insert details para sa PostDetails.tscomponent
export interface InsertDetails {
    business_name:string
    descriptions:string
    work_positions:string
    company_email:string
    contact_number:string
    slots:string
    locations:string
    collar: string
}

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
    collar: string
}

//Types ng updateForm 
export interface UpdateFormData {
    id: string;
    business_name: string;
    descriptions: string;
    work_positions: string;
    company_email: string;
    contact_number: string;
    slots: string;
    locations: string;
    collar: string
}

//Update Data Props
export interface UpdateDetailsProps {
    id: string
}