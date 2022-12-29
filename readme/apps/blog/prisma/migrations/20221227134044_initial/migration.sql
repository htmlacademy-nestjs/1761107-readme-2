/*
  Warnings:

  - Changed the type of `type` on the `Post` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('Video', 'Text', 'Quote', 'Photo', 'Link');

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "type",
ADD COLUMN     "type" "PostType" NOT NULL;
