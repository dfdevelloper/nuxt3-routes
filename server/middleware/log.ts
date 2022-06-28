export default defineEventHandler(event => {
    console.log('New req ' + event.req.url);

});