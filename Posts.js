import {useEffect, useState} from "react";
import Post from "./Post";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "@/firebase";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    /*useEffect(() => {
        (async () => {
            const qs = await getDocs(collection(db, "posts"))
            setPosts(qs.docs)
        })()
    }, [db]);*/

    useEffect(() => {
        getDocs(collection(db, "posts")).then(qs => setPosts(qs.docs))
    }, [db]);


    return (
        <div className="xl:max-w-3xl">
            {posts.map((post) => (
                <Post
                    key={post.id}
                    username={post.data().username}
                    profilePic={post.data().profileImage}
                    image={post.data().image}
                    caption={post.data().caption}
                />
            ))}
        </div>
    );
};

export default Posts;
