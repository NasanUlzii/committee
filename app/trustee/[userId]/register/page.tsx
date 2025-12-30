'use client';

import { Form } from '@/components/ui/form';
import { useParams } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { TrusteeFormValidationType } from '@/lib/validation';
import FormHeader from '@/components/forms/TrusteeForm/formHeader';
import { FormControlsProvider } from '@/components/forms/TrusteeForm/hooks/useForm';
import FormFooter from '@/components/forms/TrusteeForm/formFooter';
import RenderComponent from '@/components/forms/TrusteeForm/renderComponent';
import PersonalInformation from '@/components/forms/TrusteeForm/steps/personalInformation';
import AddressInformation from '@/components/forms/TrusteeForm/steps/addressInformation';
import WorkExperience from '@/components/forms/TrusteeForm/steps/workExperience';
import ResumeUploader from '@/components/forms/TrusteeForm/steps/resumeUploader';
import SocialLinks from '@/components/forms/TrusteeForm/steps/socialLinks';
const steps = [
    {
        id: "1",
        title: "Personal Information",
        description: "Tell us about yourself",
        component: PersonalInformation,
        inputs: ["firstName", "lastName", "email", "phone"]
    },
    {
        id: "2",
        title: "Address",
        description: "Enter your address information.",
        component: AddressInformation,
        inputs: ["country", "state", "city", "address", "zip", "timezone"],
    },
    {
        id: "3",
        title: "Work Experience",
        description:
            "Enter your work experience. This information will be used to evaluate your application.",
        component: WorkExperience,
        inputs: ["jobs"],
    },
    {
        id: "4",
        title: "Social Links",
        description:
            "Enter your social links. This information helps us to know more about you.",
        component: SocialLinks,
        inputs: ["github", "portfolio"],
    },
    {
        id: "5",
        title: "Resume",
        description:
            "Upload your resume. This information helps us to know more about you.",
        component: ResumeUploader,
        inputs: ["resume"],
    },
] satisfies Step[];
export type Step = {
    id: string;
    title: string;
    description: string;
    component: () => React.JSX.Element;
    inputs: (keyof TrusteeFormValidationType)[];
}
const TrusteeRegister = () => {
    const { userId } = useParams();
    console.log('User ID:', userId);
    const form = useForm<TrusteeFormValidationType>();
    const { handleSubmit } = useForm<TrusteeFormValidationType>()
    const onSubmit = (values: TrusteeFormValidationType) => {
        console.log(values);
    }
    return (
        <FormControlsProvider steps={steps}>
            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormHeader steps={steps} />
                    <RenderComponent steps={steps} />
                    <FormFooter steps={steps} />
                </form>
            </Form>
        </FormControlsProvider>
    )
}

export default TrusteeRegister