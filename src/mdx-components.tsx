import type { MDXComponents } from "mdx/types"
import { ArticleHeader } from "~/components/ArticleHeader"

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		ArticleHeader,
	}
}
