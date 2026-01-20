import * as expressapi from "@webtools/expressapi";

export const jsonToken = new expressapi.JsonToken(Deno.env.get("API_SECRET")!);