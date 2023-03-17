import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		const timeout = setTimeout(() => {
			void router.push("https://lurkr.gg");
		}, 10_000);

		return () => clearTimeout(timeout);
	}, [router]);

	return (
		<div className="grid min-h-screen place-items-center bg-discord-dark">
			<div>
				<header className="flex flex-col items-center justify-center py-5">
					<h1 className="font-display text-2xl font-bold text-white sm:text-4xl">Pepe Manager</h1>
				</header>

				<main className="text-white flex flex-col items-center">
					<p>
						We've changed our name to{" "}
						<Link className="text-blue-400 hover:text-blue-700 duration-200" href="https://lurkr.gg">
							lurkr.gg
						</Link>
					</p>

					<p>You'll be redirected automatically in 10 seconds.</p>

					<p className="mt-5 mb-1">Join the support server for more information:</p>

					<Link
						href="https://lurkr.gg/support"
						className="px-2 py-1 bg-slate-600 rounded-lg hover:bg-slate-700 duration-200"
					>
						Support Server
					</Link>
				</main>
			</div>
		</div>
	);
}
