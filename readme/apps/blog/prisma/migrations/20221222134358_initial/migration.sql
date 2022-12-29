-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isRepost" BOOLEAN NOT NULL,
    "primaryId" TEXT NOT NULL,
    "primaryAuthor" TEXT NOT NULL,
    "tags" TEXT[],
    "titlePost" TEXT NOT NULL,
    "previewPost" TEXT NOT NULL,
    "textPost" TEXT NOT NULL,
    "quote" TEXT NOT NULL,
    "authorQuote" TEXT NOT NULL,
    "photoLink" TEXT NOT NULL,
    "videoLink" TEXT NOT NULL,
    "linkURL" TEXT NOT NULL,
    "linkDescription" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
