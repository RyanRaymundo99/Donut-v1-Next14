import Image from "next/image";

export const Header = () => {
	return (
		<header className="h-20 w-full border-2 border-slate-200 px-4">
			<div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
				<div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
					<Image alt="mascot / logo" src="/mascot.png" height={40} width={40} className="rounded-lg" />
					<h1 className="text-xl font-extrabold text-skye-500 tracking-wide">Daqua</h1>
				</div>
			</div>
		</header>
	);
};
