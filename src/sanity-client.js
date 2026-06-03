import {createClient} from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;

const client = projectId ? createClient({
    projectId,
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-08",
    token: import.meta.env.VITE_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
}) : null;

export default client;