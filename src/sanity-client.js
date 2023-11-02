import {createClient} from "@sanity/client";

export default createClient({
    projectId: "6xo5t4re",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-08"
});