/*
  Warnings:

  - A unique constraint covering the columns `[status_name]` on the table `status` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `status_status_name_key` ON `status`(`status_name`);
