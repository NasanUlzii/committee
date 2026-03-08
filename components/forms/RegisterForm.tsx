"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SelectItem } from "@/components/ui/select";

import {
  Doctors,
  GenderOptions,
  IdentificationTypes,
  PatientFormDefaultValues,
} from "@/constants";

import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField";
//import { FileUploader } from "../FileUploader";
import SubmitButton from "../SubmitButton";
import { PatientFormValidation } from "@/lib/validation";
import { registerPatient } from "@/controllers/patient";

const RegisterForm = ({ userId }: { userId: string }) => {
  const router = useRouter();
  //const { userId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof PatientFormValidation>>({
    resolver: zodResolver(PatientFormValidation),
    defaultValues: {
      ...PatientFormDefaultValues,
    },
  });

  const onSubmit = async (values: z.infer<typeof PatientFormValidation>) => {
    setIsLoading(true);
    // Store file info in form data as
    //let formData;
    //if (
    //values.identificationDocument &&
    //values.identificationDocument?.length > 0
    //) {
    //const blobFile = new Blob([values.identificationDocument[0]], {
    //    type: values.identificationDocument[0].type,
    //});

    //formData = new FormData();
    //formData.append("blobFile", blobFile);
    //formData.append("fileName", values.identificationDocument[0].name);
    //}

    try {
      const patientToCreate = {
        //userId: user.$id,
        lastName: values.lastName,
        firstName: values.firstName,
        email: values.email,
        phone: values.phone,
        birthDate: new Date(values.birthDate),
        gender: values.gender,
        regNumber: values.regNumber,
        address: values.address,
        occupation: values.occupation,
        emergencyContactName: values.emergencyContactName,
        emergencyContactNumber: values.emergencyContactNumber,
        clientId: parseInt(userId),
        // primaryPhysician: values.primaryPhysician,
        // insuranceProvider: values.insuranceProvider,
        // insurancePolicyNumber: values.insurancePolicyNumber,
        allergies: values.allergies,
        currentMedication: values.currentMedication,
        // familyMedicalHistory: values.familyMedicalHistory,
        // pastMedicalHistory: values.pastMedicalHistory,
        // identificationType: values.identificationType,
        // identificationNumber: values.identificationNumber,
        // identificationDocument: values.identificationDocument
        //     ? formData
        //     : undefined,
        // privacyConsent: values.privacyConsent,
      };
      const patient = await registerPatient(patientToCreate);

      if (patient) {
        router.push(`/patients/${patient.id}/new-appointment`);
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full px-[8%] lg:px-[12%]">
      <div className="hero">
        <div className="w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col GolosText">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="lastName"
                    label="Овог нэр"
                    placeholder="овог нэр"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user"
                  />
                </div>
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="firstName"
                  label="Оноосон нэр"
                  placeholder="John Doe"
                  iconSrc="/assets/icons/user.svg"
                  iconAlt="user"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col GolosText">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="regNumber"
                    label="Reg number"
                    placeholder="johndoe@gmail.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="reg"
                  />
                </div>
                <div className="flex flex-col GolosText">
                  <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="email"
                    label="Email address"
                    placeholder="johndoe@gmail.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="email"
                  />
                </div>
                <div className="flex flex-col GolosText">
                  <CustomFormField
                    fieldType={FormFieldType.PHONE_INPUT}
                    control={form.control}
                    name="phone"
                    label="Phone Number"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              {/* BirthDate & Gender */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <CustomFormField
                  fieldType={FormFieldType.DATE_PICKER}
                  control={form.control}
                  name="birthDate"
                  showTimeSelect
                  label="Date of birth"
                />

                <CustomFormField
                  fieldType={FormFieldType.SKELETON}
                  control={form.control}
                  name="gender"
                  label="Gender"
                  renderSkeleton={(field) => (
                    <FormControl>
                      <RadioGroup
                        className="flex h-11 gap-6 xl:justify-between"
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        {GenderOptions.map((option, i) => (
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
              </div>
              {/* Address & Occupation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="address"
                  label="Address"
                  placeholder="14 street, New york, NY - 5101"
                />

                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="occupation"
                  label="Occupation"
                  placeholder=" Software Engineer"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  control={form.control}
                  name="emergencyContactName"
                  label="Emergency contact name"
                  placeholder="Guardian's name"
                />

                <CustomFormField
                  fieldType={FormFieldType.PHONE_INPUT}
                  control={form.control}
                  name="emergencyContactNumber"
                  label="Emergency contact number"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* <div className="flex flex-col GolosText mt-5">
                <label className="font-semibold mb-2">Your Message *</label>
                <textarea
                  placeholder="Your Message *"
                  rows={5}
                  className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"
                ></textarea>
              </div> */}
              <div className="mt-5">
                <button className="px-5 py-3 bg-white border border-gray-300 rounded-lg GolosText font-semibold hover:bg-(--prim) hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer">
                  Мэдээллээ бүртгүүлэх
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
