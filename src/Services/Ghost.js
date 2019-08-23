/* import apisauce from 'apisacuce';

const connect = (url = 'http://52.167.153.171/ghost/api/v2', key='0a51120305d59a5fab4cf8b925')=>{

    const ghost = apisauce.create({
        baseURL: url,
        headers : {
            key,
        },
        timeout: 10000
    })
    const posts = () => ghost.get (`/content/posts`)

    return {
        posts
    }

} 
export default connect; */