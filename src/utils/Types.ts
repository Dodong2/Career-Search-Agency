//Types ng insert details para sa PostDetails.ts component
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

//Types ng insert details sa PostDetails.tsx, useAdmin.ts, useJobPosts.ts, AdminServices.ts
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

//Types ng updateForm sa useAdmin.ts
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

//Update Data Props sa UpdateDetails.tsx
export interface UpdateDetailsProps {
    id: string
}