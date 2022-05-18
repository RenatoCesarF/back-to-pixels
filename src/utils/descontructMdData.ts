import matter from "gray-matter";

interface TranscriptionData{
    data: any,
    content: string
}
export function descontructMdData(md: string): TranscriptionData{
    const {data, content} = matter(md);
    return {data,content}
}