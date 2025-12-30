'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { ClientFormValidation } from '@/lib/validation';
import {
    Form,
    FormControl
} from "@/components/ui/form"
import CustomFormField, { FormFieldType } from '../CustomFormField';
import SubmitButton from '../SubmitButton';
import { useRouter } from 'next/navigation';
import { createClient } from '@/controllers/client';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { ClientOptions, GenderOptions, RelationOptions } from '@/constants';
import { Label } from '../ui/label';

const PatientForm = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof ClientFormValidation>>({
        resolver: zodResolver(ClientFormValidation),
        defaultValues: {
            relation: 'abc',
            name: '',
            email: '',
            phone: '',
        },
    })

    const onSubmit = async (values: z.infer<typeof ClientFormValidation>) => {
        setIsLoading(true);

        try {
            const client = {
                relation: 'abc',
                name: values.name,
                email: values.email,
                phone: values.phone,
            };
            console.log('Client Data:', client);
            const newTrustee = await createClient(client);

            if (newTrustee) {
                console.log('New Trustee', newTrustee);
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
                    name="name"
                    label="Full name"
                    placeholder="John Doe"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user"
                />
                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="johndoe@gmail.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="email"
                />

                <CustomFormField
                    fieldType={FormFieldType.PHONE_INPUT}
                    control={form.control}
                    name="phone"
                    label="Phone number"
                    placeholder="(555) 123-4567"
                />

                <SubmitButton className='bg-green-800 rounded-full w-full' isLoading={isLoading}>Get Started</SubmitButton>
            </form>
        </Form>
    )
}
export default PatientForm