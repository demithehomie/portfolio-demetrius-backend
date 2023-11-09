-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "imageBase64" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "whyIsRelevant" TEXT NOT NULL,
    "mainChallenges" TEXT NOT NULL,
    "repositoryLink" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
