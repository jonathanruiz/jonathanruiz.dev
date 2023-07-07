import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function ThemeToggle() {
	const [theme, setTheme] = useState(localStorage.theme);
	const colorTheme = theme === "dark" ? "light" : "dark";

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove(colorTheme);
		root.classList.add(theme);
		localStorage.setItem("theme", theme);
	}, [theme, colorTheme]);

	return (
		<Button
			variant="ghost"
			size="sm"
			onClick={() => {
				setTheme(theme === "light" ? "dark" : "light");
				console.log(theme);
			}}
		>
			<Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
