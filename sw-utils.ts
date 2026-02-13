import * as rt from "runtypes";

export function optOrUndef<T, U>(runtype: rt.Runtype.Core<T, U>) {
    return rt.Optional(rt.Undefined.or(runtype));
}

export const Version = rt.Object({
    main: rt.Number,
    sub: rt.Number,
});
export type TVersion = rt.Static<typeof Version>;

export function versionToString(version: TVersion) {
    return `${version.main}.${version.sub}`;
}
