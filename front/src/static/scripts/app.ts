import { Slick, Cookies } from "@webtools/slick-client";

function onLoad() {
	console.log(Cookies.get("token"));
}

Slick.addOnloadListener(onLoad);
onLoad();