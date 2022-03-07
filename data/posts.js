import { USERS } from './users'
export const POSTS = [
{
    imageurl:'https://imgur.com/mPqMAZH.jpg',
    user: USERS[0].user,
    likes: 7878,
    caption: 'i am the best player in the world ',
    profile_picture: USERS[0].image,
    Comments: [
        {
            user: 'emmanuel',
            comment :   'yes you are'
        },
        {
            user: 'yolo',
            comment : 'omo you are'
        }
    ]
},
{
    imageurl:'https://imgur.com/5C9hBqt.jpg',
    user: USERS[1].user,
    likes: 788,
    caption: 'hi there',
    profile_picture: USERS[1].image,
    Comments: [
        {
            user: 'bola',
            comment : 'hi there too',
        },

        {
            user: 'josh',
            comment : 'ok',
        },
    ]
}
]