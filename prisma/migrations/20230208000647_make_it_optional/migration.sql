-- DropForeignKey
ALTER TABLE "Feed" DROP CONSTRAINT "Feed_authorId_fkey";

-- AlterTable
ALTER TABLE "Feed" ALTER COLUMN "authorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Feed" ADD CONSTRAINT "Feed_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
