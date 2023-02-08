/*
  Warnings:

  - You are about to drop the column `user_id` on the `Feed` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `Feed` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Feed" DROP CONSTRAINT "Feed_user_id_fkey";

-- AlterTable
ALTER TABLE "Feed" DROP COLUMN "user_id",
ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Feed" ADD CONSTRAINT "Feed_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
