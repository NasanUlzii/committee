'use client';

import { Form } from '@/components/ui/form';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { TrusteeExtendedValidationType, TrusteeFormValidationType } from '@/lib/validation';
import FormHeader from '@/components/forms/TrusteeForm/formHeader';
import { FormControlsProvider } from '@/components/forms/TrusteeForm/hooks/useForm';
import FormFooter from '@/components/forms/TrusteeForm/formFooter';
import RenderComponent from '@/components/forms/TrusteeForm/renderComponent';
import PersonalInformation from '@/components/forms/TrusteeForm/steps/personalInformation';
import AddressInformation from '@/components/forms/TrusteeForm/steps/addressInformation';
import WorkExperience from '@/components/forms/TrusteeForm/steps/workExperience';
import ResumeUploader from '@/components/forms/TrusteeForm/steps/resumeUploader';
import SocialLinks from '@/components/forms/TrusteeForm/steps/socialLinks';
import { getTrustee } from '@/controllers/client';
import { email } from 'zod';
const steps = [
    {
        id: "1",
        title: "Personal Information",
        description: "Tell us about yourself",
        component: PersonalInformation,
        inputs: ["completed", "email"]
    },
    {
        id: "2",
        title: "Address",
        description: "Enter your address information.",
        component: AddressInformation,
        inputs: ["address"],
    },
    {
        id: "3",
        title: "Work Experience",
        description:
            "Enter your work experience. This information will be used to evaluate your application.",
        component: WorkExperience,
        inputs: ["completed", "email"],
    },
    {
        id: "4",
        title: "Social Links",
        description:
            "Enter your social links. This information helps us to know more about you.",
        component: SocialLinks,
        inputs: [],
    },
    {
        id: "5",
        title: "Resume",
        description:
            "Upload your resume. This information helps us to know more about you.",
        component: ResumeUploader,
        inputs: [],
    },
] satisfies Step[];
export type Step = {
    id: string;
    title: string;
    description: string;
    component: () => React.JSX.Element;
    inputs: (keyof TrusteeExtendedValidationType)[];
}
const TrusteeRegister = () => {
    const { userId } = useParams();

    const form = useForm<TrusteeExtendedValidationType>();
    const { handleSubmit } = useForm<TrusteeExtendedValidationType>()
    const onSubmit = (values: TrusteeExtendedValidationType) => {
        console.log('Passed : ', values);
    }

    const CONST_USER_ID = userId;
    const [user, setUser] = useState<Awaited<ReturnType<typeof getTrustee>> | undefined>();
    useEffect(() => {

        const fetchUser = async () => {
            const returnedUser = await getTrustee(CONST_USER_ID as string);
            setUser(returnedUser ?? undefined);
        }
        fetchUser();
    }, [CONST_USER_ID]);

    return (
        <>
            <div className='text-2xl font-bold mb-8 mt-10'>Registered user {user?.lastName} {user?.firstName}
                Утас: {user?.phone}
            </div>
            <FormControlsProvider steps={steps} userId={userId as string}>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormHeader steps={steps} />
                        <RenderComponent steps={steps} />
                        <FormFooter steps={steps} />
                    </form>
                </Form>
            </FormControlsProvider>
        </>
    )
}

export default TrusteeRegister