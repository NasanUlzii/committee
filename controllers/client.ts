'use server'

import { prisma } from "@/prisma/prisma";

export async function createClient(clientData: any) {
    const newClient = await prisma.client.create({
        data: clientData,
    });
    return newClient;
}

export async function createTrustee(trusteeData: any) {
    const newTrustee = await prisma.trustee.create({
        data: trusteeData,
    });
    return newTrustee;
}

export async function getTrustee(userId: string) {
    const newTrustee = await prisma.trustee.findUnique({
        where: { id: parseInt(userId) },

    });
    return newTrustee;
}