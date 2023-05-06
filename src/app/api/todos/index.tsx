// pages/api/todos/index.ts

import type { NextApiRequest, NextApiResponse } from "next";

type Todo = {
  title: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Todo[]>) => {
  await new Promise((resolve) => setTimeout(resolve, 8000)); // for slow test

  res
    .status(200)
    .json([{ title: "task 1" }, { title: "task 2" }, { title: "task 3" }]);
};