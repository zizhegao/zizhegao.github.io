import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** 按日期倒序的全部文章 */
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('posts');
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** 有 externalUrl 则外链新标签打开，否则进站内详情页 */
export function postLink(p: Post) {
  return p.data.externalUrl
    ? { href: p.data.externalUrl, external: true }
    : { href: `/posts/${p.id}/`, external: false };
}
