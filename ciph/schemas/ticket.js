import { defineType, defineField } from 'sanity'

export const Ticket = defineType({
    title: "name",
    name: "name",
    type: "document",
    fields: [
        defineField({
            title: "name",
            name: "name",
            type: "string",
        }),
        defineField({
            title: "phone",
            name: "phone",
            type: "string",
        }),
        defineField({
            title: "email",
            name: "email",
            type: "string",
        }),
        defineField({
            title: "kind",
            name: "kind",
            type: "string",
        }),

    ]
})  