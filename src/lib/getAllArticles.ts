import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename: string) {
  let { meta, default: component } = await import(
    `../pages/blog/${articleFilename}`
  )
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/blog'),
  })

  let blog = await Promise.all(articleFilenames.map(importArticle))

  return blog.sort((a, z) => compareDates(a.date, z.date))
}

function compareDates(a: string, z: string) {
  return new Date(z).getTime() - new Date(a).getTime()
}
