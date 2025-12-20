/*
  Warnings:

  - Added the required column `relation` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "relation" TEXT NOT NULL;
