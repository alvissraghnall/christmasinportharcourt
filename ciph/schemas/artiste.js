import { defineType, defineField, } from 'sanity'

export const Artiste = defineType({
    title: "artiste",
    name: "artiste",
    type: "document",
    fields: [
        defineField({
            title: "stageName",
            name: "stageName",
            type: "string",
        }),
        defineField({
            title: "profession",
            name: "profession",
            type: "string",
        }),
        defineField({
            title: "instagramLink",
            name: "instagramLink",
            type: "string",
        }),
        defineField({
            title: "twitterLink",
            name: "twitterLink",
            type: "string",
        }),
        defineField({
            title: "demoSong",
            name: "demoSong",
            type: "string",
        }),

    ]
});