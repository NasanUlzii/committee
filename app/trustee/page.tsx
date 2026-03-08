"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TrusteeFormValidation } from "@/lib/validation";
import { Form, FormControl } from "@/components/ui/form";
import CustomFormField, {
  FormFieldType,
} from "../../components/CustomFormField";
import SubmitButton from "../../components/SubmitButton";
import { useRouter } from "next/navigation";
import { createTrustee } from "@/controllers/client";
import * as z from "zod";
import Image from "next/image";
import HeroImg from "@/public//assets/images/onboarding-img.png";
export default function TrusteeHome() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof TrusteeFormValidation>>({
    resolver: zodResolver(TrusteeFormValidation),
    defaultValues: {
      completed: { completed: false },
      lastName: "",
      firstName: "",
      phone: "",
    },
  });

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
  };
  return (
    <div className="hero">
      <div className="hero-bg-elm"></div>
      <div className="hero-bg-elm2"></div>
      <div className="w-full px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="">
              <span className="hero-span border border-gray-400 GolosText font-bold px-5 py-2 rounded-full">
                Бидэнтэй нэгдэж байгаад баярлалаа 👋
              </span>
              <h1 className="text-6xl lg:text-6xl CalSans my-5">
                Өөрийн шинэ{" "}
                <span className="text-(--prim)">ажилдаа бүртгүүл</span>
              </h1>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 flex-1"
                >
                  <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col GolosText">
                        <label className="font-semibold mb-2">Овог *</label>
                        <CustomFormField
                          fieldType={FormFieldType.INPUT}
                          control={form.control}
                          name="lastName"
                          label=""
                          placeholder="овог нэр"
                          iconSrc="/assets/icons/user.svg"
                          iconAlt="user"
                        />
                      </div>
                      <div className="flex flex-col GolosText">
                        <CustomFormField
                          fieldType={FormFieldType.INPUT}
                          control={form.control}
                          name="firstName"
                          label="Нэр"
                          placeholder="өөрийн нэр"
                          iconSrc="/assets/icons/user.svg"
                          iconAlt="user"
                        />
                      </div>
                      <div className="flex flex-col GolosText">
                        <CustomFormField
                          fieldType={FormFieldType.PHONE_INPUT}
                          control={form.control}
                          name="phone"
                          label="Утасны дугаар"
                          placeholder="(99) 99 99 99 99"
                        />
                      </div>
                    </div>
                    <SubmitButton
                      className="px-5 py-3 bg-white border border-gray-300 rounded-lg GolosText font-semibold hover:bg-(--prim) hover:text-white hover:border-transparent transition-all duration-300 cursor-pointer"
                      isLoading={isLoading}
                    >
                      Get Started
                    </SubmitButton>
                  </div>
                </form>
              </Form>

              <div className="hero-content-img absolute top-10 right-10 cursor-pointer hidden md:block">
                <i className="bi bi-play-fill"></i>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 z-10">
            <div className="hero-image">
              <Image
                src={HeroImg}
                alt="HeroImage"
                className="w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
