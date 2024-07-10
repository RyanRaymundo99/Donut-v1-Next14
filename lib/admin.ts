import { auth } from "@clerk/nextjs/server";

const alowedIds = ["user_2hOUlHc2T93fdRSeDpZGKpRt9gj"];

export const isAdmin =  () => {
  const { userId } = auth();

  if (!userId) return false;

  return alowedIds.indexOf(userId) !== -1;
};
