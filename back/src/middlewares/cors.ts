import * as expressapi from "@webtools/expressapi";

export const cors: expressapi.RequestListener = (_req, res) => {
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Fingerprint");

	res.setHeader("Access-Control-Allow-Origin", Deno.env.get("APP_URL")!);
};