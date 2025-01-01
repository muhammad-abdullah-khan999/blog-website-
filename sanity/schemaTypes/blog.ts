export default {
    name: 'blog',
    type: 'document',
    title: 'blog',
    fields : [
        {
            name : 'title',
            type : 'string',
            title : 'Title of Blog Article',
        },
        {
            name : 'slug',
            type : 'slug',
            title : 'Slug of your Blog Article',
            options : {
                source : 'title',
            }
        },
        {
            name : 'titleImage',
            type : 'image',
            title : 'Title Image',
        },
        {
            name : 'smallDescription',
            type : 'text',
            title : 'Small Description',
        },
        {
            name : 'content',
            type : 'array',
            title : 'Content',
            of : [
                {
                    type : 'block',
                }
            ]
        },
        
    ]
}