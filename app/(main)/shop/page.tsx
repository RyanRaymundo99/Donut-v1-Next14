import FeedWrapper from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper"
import { UserProgress } from "@/components/user-progess"
import { getUserProgress, getUserSubscription } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Items } from "./items";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";

const Shop = async () => {
    const userProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();

    const [
        userProgress,
        userSubscription
    ] = await Promise.all([
        userProgressData,
        userSubscriptionData
    ])

    const isPro = !!userSubscription?.isActive

    if (!userProgress || !userProgress.activeCourse) {
        redirect("/learn")
    }
    return (
      <div className="flex flex-row-reverse gap-[48px] px-6">
        <StickyWrapper>
          <UserProgress
            activeCourse={userProgress.activeCourse}
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={isPro}
          />
          {!isPro && <Promo />}
          <Quests points={userProgress.points}/>
        </StickyWrapper>
        <FeedWrapper>
          <div className="w-full flex flex-col items-center ">
            <Image src="/shop.png" alt="shop" width={90} height={90} />
            <h1 className="text-center font-bold text-neutral-800 text-2xl my-6 ">
              Shop
            </h1>
            <p className="text-muted-foreground text-center text-lg mb-6">
              Spend your points on cool stuff
            </p>
            <Items
              hearts={userProgress.hearts}
              points={userProgress.points}
              hasActiveSubscription={isPro}
            />
          </div>
        </FeedWrapper>
      </div>
    );
}

export default Shop