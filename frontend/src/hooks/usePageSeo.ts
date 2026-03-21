import { useEffect } from 'react'

type SeoOptions = {
  title: string
  description: string
  canonicalPath?: string
}

export function usePageSeo({ title, description, canonicalPath }: SeoOptions) {
  useEffect(() => {
    document.title = title

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta')
      descriptionMeta.setAttribute('name', 'description')
      document.head.appendChild(descriptionMeta)
    }
    descriptionMeta.setAttribute('content', description)

    if (canonicalPath !== undefined) {
      const canonicalUrl = `https://wilhelmrolstad.no${canonicalPath}`
      let canonicalLink = document.querySelector('link[rel="canonical"]')
      if (!canonicalLink) {
        canonicalLink = document.createElement('link')
        canonicalLink.setAttribute('rel', 'canonical')
        document.head.appendChild(canonicalLink)
      }
      canonicalLink.setAttribute('href', canonicalUrl)
    }
  }, [title, description, canonicalPath])
}
