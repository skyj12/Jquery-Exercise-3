$.get('https://dwolverton.github.io/fe-demo/data/blog-posts.json').then((responseData) => {
console.log(responseData.title);
console.log(responseData.language);
console.log(responseData.posts.length);
console.log(responseData.posts[0].title);

const titles = responseData.posts;
titles.forEach(element => {
    console.log(element.title);

});
});
