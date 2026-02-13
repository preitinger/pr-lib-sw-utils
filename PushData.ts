import * as rt from "runtypes";
import { optOrUndef } from "./sw-utils";

export const PushData = rt.Object({
    title: rt.String,
    body: rt.String,
    url: rt.String,
    icon: optOrUndef(rt.String),
});
export type TPushData = rt.Static<typeof PushData>;
