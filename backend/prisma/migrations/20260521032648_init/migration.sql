-- CreateEnum
CREATE TYPE "GameStatus" AS ENUM ('PLAYING', 'COMPLETED', 'PLATINUM', 'DROPPED', 'BACKLOG');

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "score" INTEGER,
    "review" TEXT,
    "status" "GameStatus" NOT NULL DEFAULT 'BACKLOG',
    "coverUrl" TEXT,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
