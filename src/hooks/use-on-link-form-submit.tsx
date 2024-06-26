import { useTransition } from "react"
import { toast } from "sonner"
import type { Link } from "~/types"
import { getPageMetadata } from "~/actions/metadata"

interface Props {
	action: (formData: Omit<Link, "tags">) => Promise<void>
	afterSubmit: () => void
}

export const useOnLinkFormSubmit = ({ action, afterSubmit }: Props) => {
	const [isPending, startTransition] = useTransition()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		const form = e.currentTarget
		form.checkValidity()
		e.preventDefault()

		startTransition(async () => {
			const { url } = Object.fromEntries(new FormData(form)) as { url: string }

			const metadata = await getPageMetadata(url)

			if (!metadata) {
				toast.error("La URL no es válida.")
				return
			}

			const { ogImage, ...restMetadata } = metadata

			const ogImageUrl = ogImage ? (ogImage.includes("https") ? ogImage : `${url}${ogImage}`) : null

			await action({ url, ogImageUrl, ...restMetadata })
			afterSubmit()
		})
	}

	return {
		handleSubmit,
		isPending,
	}
}
