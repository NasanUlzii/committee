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
            relation: '',
            name: '',
            email: '',
            phone: '',
        },
    })

    const onSubmit = async (values: z.infer<typeof ClientFormValidation>) => {
        setIsLoading(true);

        try {
            const client = {
                relation: values.relation,
                name: values.name,
                email: values.email,
                phone: values.phone,
            };

            console.log('client', client);
            const newClient = await createClient(client);

            if (newClient) {
                console.log('New Client', newClient);
                router.push(`/patients/${newClient.id}/register`);
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
                    <p className='text-dark-700'>Schedule your first appointment</p>
                </section>
                <CustomFormField
                    fieldType={FormFieldType.SKELETON}
                    control={form.control}
                    name="gender"
                    label="Та хэнд захиалага хийж байна вэ?"
                    renderSkeleton={(field) => (
                        <FormControl>
                            <RadioGroup
                                className="flex h-11 gap-6 xl:justify-between"
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                {ClientOptions.map((option, i) => (
                                    <div key={option + i} className="radio-group">
                                        <RadioGroupItem value={option} id={option} />
                                        <Label htmlFor={option} className="cursor-pointer">
                                            {option}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </FormControl>
                    )}
                />

                <CustomFormField
                    fieldType={FormFieldType.SKELETON}
                    control={form.control}
                    name="relation"
                    label="Танд ямар хамааралтай хүн бэ?"
                    renderSkeleton={(field) => (
                        <FormControl>
                            <RadioGroup
                                className="flex h-11 gap-6 xl:justify-between"
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                {RelationOptions.map((option, i) => (
                                    <div key={option + i} className="radio-group">
                                        <RadioGroupItem value={option} id={option} />
                                        <Label htmlFor={option} className="cursor-pointer">
                                            {option}
                                        </Label>
                                    </div>
                                ))}
                            </RadioGroup>
                        </FormControl>
                    )}
                />
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