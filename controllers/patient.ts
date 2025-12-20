'use server'

import { prisma } from "@/prisma/prisma";

export async function registerPatient(patientData: any) {
    const newPatient = await prisma.patient.create({
        data: patientData,
    });
    return newPatient;
}