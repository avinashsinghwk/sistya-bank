-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('SUCCESS', 'PENDING', 'FAILURE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "number" TEXT NOT NULL,
    "password" TEXT,
    "balance" INTEGER,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "verificationOtp" TEXT,
    "verificationOtpExpiry" TIMESTAMP(3),
    "forgotPasswordOtp" TEXT,
    "forgotPasswordOtpExpiry" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WithdrawTransaction" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "status" "TransactionStatus" NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usedId" TEXT NOT NULL,

    CONSTRAINT "WithdrawTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReceivedTransaction" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "status" "TransactionStatus" NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usedId" TEXT NOT NULL,

    CONSTRAINT "ReceivedTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_number_key" ON "User"("number");

-- AddForeignKey
ALTER TABLE "WithdrawTransaction" ADD CONSTRAINT "WithdrawTransaction_usedId_fkey" FOREIGN KEY ("usedId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReceivedTransaction" ADD CONSTRAINT "ReceivedTransaction_usedId_fkey" FOREIGN KEY ("usedId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
