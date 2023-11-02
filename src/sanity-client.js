import client from "@sanity/client";

export default client({
    projectId: "YOUR_PROJECT_ID",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-08"
});