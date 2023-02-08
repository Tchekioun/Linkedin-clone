/*
  Warnings:

  - Made the column `authorId` on table `Feed` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Feed" DROP CONSTRAINT "Feed_authorId_fkey";

-- AlterTable
ALTER TABLE "Feed" ALTER COLUMN "authorId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Feed" ADD CONSTRAINT "Feed_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
