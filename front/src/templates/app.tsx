import * as Slick from "@webtools/slick-server";

export default {
	name: "app",
	favicon: "/favicon.ico",

	styles: [
		"/styles/reset.css",
		"/styles/app.css",
	],
	scripts: [
		"/scripts/app.ts",
	],

	head: <></>,
	body: (
		<>
			<div id="app"></div>
		</>
	),

	onrequest: async (req) => {
        req.data.user = null;
        if (!req.cookies.token) return;

        const response = await fetch(`${Deno.env.get("API_URL")}/user`, {
            headers: {
                "Authorization": `Bearer ${req.cookies.token}`,
            },
        });

        const jsonResponse = await response.json();
        if (jsonResponse.success) req.data.user = jsonResponse.data;
    },
} satisfies Slick.Template;