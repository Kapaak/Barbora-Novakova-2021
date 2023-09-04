//libraries
import imageUrlBuilder from "@sanity/image-url";
//data
import { client } from "../sanity/index";

const builder = imageUrlBuilder(client);

export const urlFor = source => {
	if(!source) return "";
	
	return builder.image(source);
};
