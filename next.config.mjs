import createMDX from '@next/mdx'
import rehypeShiki from '@shikijs/rehype'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypeShiki, { theme: "aurora-x" }]],
  },
})

export default withMDX(nextConfig)