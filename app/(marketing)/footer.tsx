import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/DE.svg"
            alt="Germany"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          German
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/FR.svg"
            alt="French"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
        French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/IT.svg"
            alt="Italian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
        Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/ES.svg"
            alt="Espanish"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Espanish
        </Button>
      </div>
    </footer>
  );
};
