// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {SERVER_URL} from '../../helpers/constant'

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}

export const blogData = async () => {

    const urls = [
      `${SERVER_URL}/api/blog/trendingBlog`,
      `${SERVER_URL}/api/categories`,
      `${SERVER_URL}/api/author`,
      `${SERVER_URL}/api/blog`,
    ];

    return Promise.all(urls.map((url) => fetch(url).then((r) => r.json())))
      .then(([trendingBlog, categories, authors, blogs]) => {
        return {
          trendingBlog: trendingBlog.data,
          categories: categories.data,
          authors: authors.data,
          blogs: blogs.data,
        };
      })
      .catch((error) => console.log(error));
};