import { ImageProps } from "next/image";

export interface Role {
    company: string
    title: string
    // logo: ImageProps['src']
    start: string | { label: string; dateTime: string }
    end: string | { label: string; dateTime: string }
}