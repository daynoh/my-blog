import { compareDesc, parseISO } from "date-fns"
import type { Blog } from "@/.contentlayer/generated"


export const cx = (...classNames:(string | undefined |null | boolean)[]) => classNames.filter(Boolean).join(" ")

export const sortBlogs = (blogs:Blog[]): Blog[]=>{
    return blogs
    .slice()
    .sort((a:Blog,b:Blog) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    )
}