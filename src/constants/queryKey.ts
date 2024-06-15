export const queryKey = {
  scheme: () => ["scheme"],
  posts: () => ["posts"],
  tags: () => ["Series"],
  categories: () => ["categories"],
  post: (slug: string) => ["post", slug],
}
