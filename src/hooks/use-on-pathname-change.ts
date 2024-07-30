import { useEffect } from "react"
import { usePathname } from "next/navigation"

export const useOnPathnameChange = (callback: () => void) => {
	const pathname = usePathname()

	useEffect(() => {
		callback()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])
}
