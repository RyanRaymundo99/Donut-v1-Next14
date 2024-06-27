import { Progress } from "@/components/ui/progress"
import { useExitModel } from "@/store/use-exit-model"
import { InfinityIcon, X } from "lucide-react"
import Image from "next/image"

type Props = {
    hearts: number
    percentage: number
    hasActiveSubscription: boolean
}

export const Header = ({ hearts, percentage, hasActiveSubscription }: Props) => {
    const { open } = useExitModel();

    return (
        <header className="lg:pt-[50] pt-[20px] px-10 flex gap-x-7 items-center justify-between max-w-[1140px] mx-auto w-full">
            <X
                onClick={open}
                className="text-slate-500 hover:opacity-75 transition cursor-pointer"
            /> 
            <Progress value={percentage} />
            <div className="text-rose-500 flex items-center font-bold">
                <Image
                    src="/heart.png"
                    alt="heart"
                    width={28}
                    height={28}
                    className="mr-2"
                />

                {hasActiveSubscription
                    ? <InfinityIcon className="h-6 w-6 stroke-[3]" />
                    : hearts
                }
            </div>
       </header>
    )
}