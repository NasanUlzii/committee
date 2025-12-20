'use server'

import { prisma } from "@/prisma/prisma";

export async function createAppointment(appointment: any) {
    console.log("Creating appointment with data:", appointment);
    const newAppointment = await prisma.appointment.create({
        data: appointment,
    });
    return newAppointment;
}

export async function updateAppointment(appointmentData: any) {
    const updatedAppointment = await prisma.appointment.update({
        where: { id: appointmentData.appointmentId },
        data: appointmentData.appointment,
    });
    return updatedAppointment;
}

export async function getAppointment(appointmentId: any) {
    const appointment = await prisma.appointment.findUnique({
        where: { id: appointmentId },
    });
    return appointment;
}