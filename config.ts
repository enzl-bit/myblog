import lume from "https://deno.land/x/lume@v1.20.0/mod.ts";
import date from "https://deno.land/x/lume@v1.20.0/plugins/date.ts";
import slugify_urls from "https://deno.land/x/lume@v1.20.0/plugins/slugify_urls.ts";

const site = lume();

site.use(date());
site.use(slugify_urls());
site.copy("static");

export default site;
