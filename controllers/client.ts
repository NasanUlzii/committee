'use server'

import { prisma } from "@/prisma/prisma";

export async function createClient(clientData: any) {
    const newClient = await prisma.client.create({
        data: clientData,
    });
    return newClient;
}