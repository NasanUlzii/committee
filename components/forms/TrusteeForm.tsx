'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { TrusteeFormValidation } from '@/lib/validation';
import {
    Form,
    FormControl
} from "@/components/ui/form"
import CustomFormField, { FormFieldType } from '../CustomFormField';
import SubmitButton from '../SubmitButton';
import { useRouter } from 'next/navigation';
import { createTrustee } from '@/controllers/client';
import * as z from 'zod'
const TrusteeForm = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof TrusteeFormValidation>>({
        resolver: zodResolver(TrusteeFormValidation),
        defaultValues: {
            completed: { completed: false },
            lastName: '',
            firstName: '',
            phone: '',
        },
    })

    const onSubmit = async (values: z.infer<typeof TrusteeFormValidation>) => {
        setIsLoading(true);

        try {
            const client = {
                completed: false,
                lastName: values.lastName,
                firstName: values.firstName,
                phone: values.phone,
            };
            const newTrustee = await createTrustee(client);

            if (newTrustee) {
                router.push(`/trustee/${newTrustee.id}/register`);
            }
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                <section className='mb-12 space-y-4'>
                    <h1 className='header'>Hi there 👋</h1>
                    <p className='text-dark-700'>Register for your new job</p>
                </section>

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="lastName"
                    label="Овог"
                    placeholder="овог нэр"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user"
                />
                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="firstName"
                    label="Нэр"
                    placeholder="өөрийн нэр"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user"
                />

                <CustomFormField
                    fieldType={FormFieldType.PHONE_INPUT}
                    control={form.control}
                    name="phone"
                    label="Утасны дугаар"
                    placeholder="(99) 99 99 99 99"
                />

                <SubmitButton className='bg-green-800 rounded-full w-full' isLoading={isLoading}>Get Started</SubmitButton>
            </form>
        </Form>
    )
}
export default TrusteeForm