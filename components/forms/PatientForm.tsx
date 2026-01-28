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
import { SelectItem } from '../ui/select';

const PatientForm = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isRelation, setIsRealtion] = useState<boolean>();
    const form = useForm<z.infer<typeof ClientFormValidation>>({
        resolver: zodResolver(ClientFormValidation),
        defaultValues: {
            relation: 'Бусдад',
            name: '',
            email: '',
            phone: '',
        },
    })
    const onOptionChange = (e: string) => {
        console.log(e)
        e === 'Бусдад' ? setIsRealtion(true) : setIsRealtion(false)
    }
    const onSubmit = async (values: z.infer<typeof ClientFormValidation>) => {
        setIsLoading(true);

        try {
            const client = {

                relation: isRelation ? values.relation : 'self',
                name: values.name,
                email: values.email,
                phone: values.phone,
            };

            const newPatient = await createClient(client);
            console.log(client)
            if (newPatient) {
                router.push(`/patients/${newPatient.id}/register`);
            }

        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    }

    return (
        <>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                    <div className='flex flex-row'>
                        <CustomFormField
                            fieldType={FormFieldType.SKELETON}
                            control={form.control}
                            name='relation'
                            label='Захиалга өгөх хүний хамаарал'
                            renderSkeleton={(relation) => (
                                <FormControl>
                                    <RadioGroup
                                        className="flex h-11 gap-6 xl:justify-between"
                                        onValueChange={onOptionChange}
                                        defaultValue={relation.value}
                                    >
                                        {ClientOptions.map((option, i) => (
                                            <div key={option + i} className="radio-group">
                                                <RadioGroupItem className='h-8 w-8' value={option} id={option} />
                                                <Label htmlFor={option} className="cursor-pointer text-xl mt-2">
                                                    {option}
                                                </Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            )}

                        />
                    </div>
                    {isRelation && <p
                        className='mt-5 mb-5 text-sm/8 font-semibold md:text-lime-300
                     leading-loose tracking-wide text-justify text-gray-600'>
                        Та үйлчилгээ авах хүнийхээ танд хамаарлыг сонгон, мөн өөрийнхөө холбоо барих
                        овог, нэр утсаа оруулан бүртгүүлнэ үү!.
                    </p>}
                    {isRelation && <CustomFormField

                        fieldType={FormFieldType.SELECT}
                        control={form.control}
                        name="relation"
                        label="Хамаарал"
                        placeholder="Таны хэн болох"
                    >
                        {

                            RelationOptions.map((relation, i) => (

                                <SelectItem
                                    key={i}
                                    value={relation}>
                                    <p>{relation}</p>
                                </SelectItem>
                            ))

                        }
                    </CustomFormField>}

                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="name"
                        label="Овог Нэр"
                        placeholder="Овог нэр"
                        iconSrc="/assets/icons/user.svg"
                        iconAlt="user"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="email"
                        label="Мэйл хаяг"
                        placeholder="johndoe@gmail.com"
                        iconSrc="/assets/icons/email.svg"
                        iconAlt="email"
                    />

                    <CustomFormField
                        fieldType={FormFieldType.PHONE_INPUT}
                        control={form.control}
                        name="phone"
                        label="Утасны дугаар"
                        placeholder="(555) 123-4567"
                    />

                    <SubmitButton className='bg-green-800 rounded-full w-full' isLoading={isLoading}>Get Started</SubmitButton>
                </form>
            </Form>
        </>
    )
}
export default PatientForm