import Link from 'next/link';
import { fetchPost, fetchUser, fetchComments } from '../../utils/functions';

export async function getServerSideProps({ params }) {
    const post = await fetchPost(params.id);
    const user = await fetchUser(post.userId);
    const comments = await fetchComments(params.id);

    return { //post + user + comments
        props: {
            post,
            user,
            comments,
        },
    };
}

const PostPage = ({ post, user, comments }) => {
    return (
        <div style={{ fontFamily: 'Roboto, sans-serif', padding: '20px' }}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>User Info</h2>
            <Link href={`/users/${user.id}`} legacyBehavior>
                <a>{user.name}</a>
            </Link>
            <p>Email: {user.email}</p>
            <h2>Comments</h2>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                {comments.map(comment => (
                    <li key={comment.id} style={{ marginBottom: '10px' }}>
                        <p><strong>{comment.name}</strong>: {comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostPage;
