'use server'

import { prisma } from "@/prisma/prisma";

export async function createClient(clientData: any) {
    console.log('Creating client with data:', clientData);
    const newClient = await prisma.client.create({
        data: clientData,
    });
    return newClient;
}

export async function createTrustee(trusteeData: any) {
    console.log('Creating trustee with data:', trusteeData);
    const newTrustee = await prisma.trustee.create({
        data: trusteeData,
    });
    return newTrustee;
}