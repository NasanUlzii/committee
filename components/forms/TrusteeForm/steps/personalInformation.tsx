'use client';
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { TrusteeExtendedValidationType } from "@/lib/validation";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { FormControlsProvider, useFormControls } from "../hooks/useForm";
//import { getTrustee } from "@/controllers/client";

const PersonalInformation = () => {
    const { control } = useFormContext<TrusteeExtendedValidationType>();

    return (
        <div className="w-full grid grid-cols-4 gap-4">


            <FormField
                control={control}
                name="email"
                render={({ field }) => (
                    <FormItem className="col-span-2">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input
                                type="email"
                                placeholder="Enter Your Email"
                                id="email"
                            //value={email? }
                            />
                        </FormControl>
                        <FormDescription>This is your contact email address.</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />

        </div>
    );
};

export default PersonalInformation;
