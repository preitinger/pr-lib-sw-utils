
// Jetzt nur noch diese eine Datei. Duplikate zu entfernen!

import * as rt from "runtypes"
import { Version } from "./sw-utils"

export const GetVersionReq = rt.Object({
    type: rt.Literal('getVersion'),
})
export type TGetVersionReq = rt.Static<typeof GetVersionReq>

export const GetVersionRes = rt.Object({
    type: rt.Literal('success'),
    version: Version,
})
export type TGetVersionRes = rt.Static<typeof GetVersionRes>

export const SkipWaiting = rt.Object({
    type: rt.Literal('skipWaiting'),
})
export type TSkipWaiting = rt.Static<typeof SkipWaiting>
