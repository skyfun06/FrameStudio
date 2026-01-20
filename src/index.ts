import { Slick } from "@webtools/slick-server";

const slick = new Slick(import.meta.dirname!, {
    env: { API_URL: Deno.env.get("API_URL") },
    port: Number(Deno.env.get("APP_PORT")!),
    client: true,
});

await slick.start();