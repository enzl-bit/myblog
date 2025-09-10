import lume from "lume/mod.ts";
import date from "lume/mod.ts";
import slugify_urls from "lume/mod.ts";

const site = lume();

site.use(date());
site.use(slugify_urls());
site.copy("static");

export default site;
