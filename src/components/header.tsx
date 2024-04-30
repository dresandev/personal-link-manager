import { Clover, Stars, ThumbUp } from "./svg"
import { SecretKeyForm } from "./secret-key-form"

export const Header = () => {
	return (
		<header className="relative px-5 pb-10 pt-24 md:pt-40">
			<div className="bg-grid absolute inset-0 -bottom-24 -z-10"></div>
			<h1 className="mx-auto mb-4 max-w-[760px] text-center text-[40px] font-bold md:text-[60px]">
				<span className="relative rounded-full text-buttery-yellow hover:bg-[hsl(48_97%_77%/0.1)]">
					Bueno
					<ThumbUp className="absolute inset-x-0 -top-7 mx-auto size-[40px] rotate-12 md:-top-14 md:size-[70px]" />
				</span>
				,{" "}
				<span className="relative rounded-full text-soft-teal hover:bg-[hsl(151_24%_61%/0.1)]">
					Bonito
					<Stars className="absolute inset-x-0 -top-7 mx-auto size-[40px] md:-top-14 md:size-[70px]" />
				</span>{" "}
				y{" "}
				<span className="relative rounded-full text-warm-coral hover:bg-[hsl(0_91%_71%/0.1)]">
					Barato
					<Clover className="absolute inset-x-0 -top-7 mx-auto size-[40px] -rotate-12 md:-top-14 md:size-[70px]" />
				</span>
				, más facil que la tabla del 0
			</h1>
			<p className="mx-auto max-w-[760px] text-center text-lg md:text-xl">
				Gestiona tus links de manera rapida, simple, sencilla, amigable, honesta, correcta,
				apasionada, creible, fiable, responsable y sobre todo divergente
			</p>

			<SecretKeyForm />
		</header>
	)
}
