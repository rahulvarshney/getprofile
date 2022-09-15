// routes/_middleware.ts

import { remultFresh } from "remult/remult-fresh";
import { Task } from "../model/task.ts";

export const remultServer = remultFresh({
    entities: [Task]
 }, Response);

export const handler = remultServer.handle;