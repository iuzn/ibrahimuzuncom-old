export type BlogPostType = "video";

export interface BlogPost {
  id: string;
  preview: string;
  title: string;
  types: BlogPostType[];
  images: {
    name: string;
    url: string;
  }[];
  video: string;
  tags: string[];
  slug: string;
  date: number;
  published: boolean;
}
