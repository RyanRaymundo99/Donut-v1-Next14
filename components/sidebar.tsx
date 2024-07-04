import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { SidebarItem } from "./sidebar-item";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex bg-background h-full lg:w-[256px] lg:fixed left-0 right-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            alt="mascot / logo"
            src="/mascot.png"
            height={40}
            width={40}
            className="rounded-lg"
          />
          <h1 className="text-xl font-extrabold text-skye-500 tracking-wide">
            Donut
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem iconSrc="/house.png" label="Learn" href="/learn" />
        <SidebarItem
          iconSrc="/podium.png"
          label="Leaderboard"
          href="/leaderboard"
        />
        <SidebarItem iconSrc="/target.png" label="Quests" href="/quests" />
        <SidebarItem iconSrc="/shop.png" label="Shop" href="/shop" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
