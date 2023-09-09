import classnames from "classnames"
import { twMerge } from "tailwind-merge"

export const classNames = (...args: Parameters<typeof classnames>) => twMerge(classnames(args))

export const capitalize = (text: string) =>
  text
    .split(" ")
    .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(" ")
