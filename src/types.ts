import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface PostAuthor {
  name: string
  imageUrl: string
}

export interface PostCategory {
  name: string
  href: string
}

export interface PostItem {
  title: string
  description: string
  category: PostCategory
  author: PostAuthor
  date: string
  readingTime: string
  imageUrl: string
}

export interface Person {
  name: string
  role: string
  imageUrl: string
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}
