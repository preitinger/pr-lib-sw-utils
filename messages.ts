// Jetzt nur noch diese eine Datei. Duplikate zu entfernen!

import * as rt from "runtypes";
import { Version } from "./sw-utils";

/**
 * Message from client to its service worker
 */
export const GetVersionReq = rt.Object({
	type: rt.Literal("getVersion"),
});
/**
 * Message from client to its service worker
 */
export type TGetVersionReq = rt.Static<typeof GetVersionReq>;

/**
 * Response from service worker to its client
 */
export const GetVersionRes = rt.Object({
	type: rt.Literal("success"),
	version: Version,
});
/**
 * Response from service worker to its client
 */
export type TGetVersionRes = rt.Static<typeof GetVersionRes>;

/**
 * Message from client to its service worker
 */
export const SkipWaiting = rt.Object({
	type: rt.Literal("skipWaiting"),
});
export type TSkipWaiting = rt.Static<typeof SkipWaiting>;
