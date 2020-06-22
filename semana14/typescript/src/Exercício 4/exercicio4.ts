type Post = {
    author: string,
    text: string
}

const posts: Post[] = [
    { author: "Wagner", text: "TypeScript é legal" },
    { author: "Soter", text: "Tchuptchura" },
    { author: "Bob", text: "Is this love ?"},
    { author: "Wagner", text: "TypeScript é bem legal mesmo"},
    { author: "Wagner", text: "Vou tentar usar TS no React"}
]

const postsByAuthor = (postsList: Post[], authorName: string): Post[] => {
    return postsList.filter( post =>  post.author === authorName);
}

console.log(postsByAuthor(posts, "Wagner"));
console.log(postsByAuthor(posts, "Soter"));
console.log(postsByAuthor(posts, "Bob"));