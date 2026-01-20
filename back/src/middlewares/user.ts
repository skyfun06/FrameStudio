import * as expressapi from "@webtools/expressapi";
import * as services from "../services/index.ts";
import * as models from "../models/index.ts";

export const user: expressapi.RequestListener = async (req, res) => {
	const token = req.headers.get("authorization")?.split(" ")[1] || "";
	const payload = await services.jsonToken.verify(token);

	if (payload == null || payload.type != "user" || payload.expireAt < Date.now()) {
		return res.status(401).json({
			success: false,
			error: "401 Unauthorized.",
		});
	}

	const user = await models.User.findByPk(payload.id);
	if (user == null || user.resetId != payload.resetId) {
		return res.status(401).json({
			success: false,
			error: "401 Unauthorized.",
		});
	}

	req.data.user = user;
};