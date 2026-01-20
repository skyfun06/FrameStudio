import * as expressapi from "@webtools/expressapi";

export const routes: expressapi.Route[] = [
	{
		url: "/",
		method: expressapi.HttpMethods.GET,
		middlewares: [],
		requestListener: (_req, res) => {
			return res.json({
				success: true,
				data: "Hello world!",
			});
		},
	},
];