export interface FeedPost {
  id: string;
  title: string;
  description: string;
  /** Path under /public or external URL */
  image: string;
  date: string;
  category: string;
}

export interface FeedPostDetail extends FeedPost {
  content?: string;
}
