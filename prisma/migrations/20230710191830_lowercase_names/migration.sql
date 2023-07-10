/*
  Warnings:

  - You are about to drop the column `Description` on the `Photo` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Photo` table. All the data in the column will be lost.
  - Added the required column `description` to the `Photo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Photo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Photo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "Description",
DROP COLUMN "Name",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
