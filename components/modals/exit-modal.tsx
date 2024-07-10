"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useExitModel } from "@/store/use-exit-model";

export const ExitModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModel();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image
              src="/mascot_sad.png"
              alt="mascot"
              width={200}
              height={200}
            />
          </div>
          <DialogTitle className="text-center  font-bold text-2xl">
            Wait, don&apos;t leave...
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            You&apos;re about to leave the lesson. Are you sure you want to
            continue?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4 ">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="primary"
              className="w-full"
              size="lg"
              onClick={close}
            >
              Keep Learning
            </Button>
            <Button
              variant="dangerOutlined"
              className="w-full"
              size="lg"
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              End Session
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
