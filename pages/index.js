// /pages/index.js
import Link from 'next/link'; //link pages [id] connection
import { fetchPosts } from '../utils/functions';

export async function getStaticProps() { //Grab all Posts for Main Page
    const posts = await fetchPosts();
    return {
        props: {
            posts,
        },
    };
}

const home = ({ posts }) => {
    return (
        <div style={{ textAlign: 'center', fontFamily: 'Roboto, sans-serif', minHeight: '20vh', color: '#1E88E5' }}>
            <h1>Posts</h1>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {posts.map(post => (
                    <li key={post.id} style={{ textAlign: 'left', marginBottom: '20px' }}>
                        <Link href={`/posts/${post.id}`}>
                            <div>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default home;
