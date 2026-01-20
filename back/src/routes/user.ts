import * as expressapi from "@webtools/expressapi";
import * as middlewares from "../middlewares/index.ts";
import * as models from "../models/index.ts";

export const routes: expressapi.Route[] = [
	{
		url: "/user",
		method: expressapi.HttpMethods.GET,
		middlewares: [middlewares.user],
		requestListener: (req, res) => {
			const user = (req.data.user as models.User).toJSON();
			delete user.password;

			return res.json({
				success: true,
				data: user,
			});
		},
	},
];