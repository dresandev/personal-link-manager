import { getTags } from "~/actions/tags"
import { TagListPill } from "~/components/tag-list-pill"

interface Props {
	tagFilter?: string
}

export const TagList: React.FC<Props> = async ({ tagFilter = "Todo" }) => {
	const tags = await getTags()

	return (
		<div className="no-scrollbar items-start -mx-5 flex gap-x-4 overflow-x-auto px-5 py-2">
			<TagListPill name="Todo" isSelected={tagFilter === "Todo"} />
			{tags.map(({ id, name }) => (
				<TagListPill key={id} name={name} isSelected={name === tagFilter} />
			))}
		</div>
	)
}
