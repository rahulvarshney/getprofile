// routes/index.ts

import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Todos from "../islands/todos.tsx";
import { Task } from "../model/task.ts";
import { remultServer } from "./_middleware.ts";

export const handler: Handlers<Task[]> = {
  async GET(req, ctx) {

    console.log("index.tsx 12: ", req.url);
    const remult = await remultServer.getRemult(req);

    let b2b_logo_url = req.url.replace(/(.+\/\/)/, "");
    b2b_logo_url = b2b_logo_url.replace(/(\/)$/, "");
    console.log(b2b_logo_url);
    return ctx.render(await remult.repo(Task).find({
      where: {
        b2b_domain: b2b_logo_url
      }
    }));
  },
};

export default function Home({ data }: PageProps<Task[]>) {
  return (
    <div>
      <Todos data={data} />
    </div>
  );
}