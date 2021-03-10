import { Link } from './types';
export default {
    get: (code: Link["code"]): Promise<Link> => {
        return fetch(`https://api.shrtco.de/v2/info?code=${code}`).then(res => res.json());
    },

    create: (url: Link["original_link"]): Promise<Link> => {
        return fetch(`https://api.shrtco.de/v2/shorten?url=${url}`, { method: "POST" }).then(res => res.json()).then(({ result }) => result);
    }
}