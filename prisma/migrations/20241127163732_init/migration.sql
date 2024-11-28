/*
  Warnings:

  - You are about to drop the column `associated_id` on the `Articles` table. All the data in the column will be lost.
  - You are about to drop the column `associated_id` on the `Articles_Panels` table. All the data in the column will be lost.
  - You are about to drop the column `parent_id` on the `Articles_Panels` table. All the data in the column will be lost.
  - You are about to drop the column `parent_id` on the `Articles_Panels_List` table. All the data in the column will be lost.
  - You are about to drop the `Source_Type` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[parentname]` on the table `Articles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `parentId` to the `Articles_Panels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentId` to the `Articles_Panels_List` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Articles_Panels_List_name_key";

-- AlterTable
ALTER TABLE "Articles" DROP COLUMN "associated_id";

-- AlterTable
ALTER TABLE "Articles_Panels" DROP COLUMN "associated_id",
DROP COLUMN "parent_id",
ADD COLUMN     "parentId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Articles_Panels_List" DROP COLUMN "parent_id",
ADD COLUMN     "parentId" INTEGER NOT NULL,
ALTER COLUMN "type" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Source_Type";

-- CreateIndex
CREATE UNIQUE INDEX "Articles_parentname_key" ON "Articles"("parentname");

-- AddForeignKey
ALTER TABLE "Articles_Panels" ADD CONSTRAINT "Articles_Panels_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articles_Panels_List" ADD CONSTRAINT "Articles_Panels_List_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Articles_Panels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
