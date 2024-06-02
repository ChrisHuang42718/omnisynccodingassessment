// UserPage Component (/pages/users/[id].js)
import Link from 'next/link';
import { fetchUser, fetchUserPosts } from '../../utils/functions';

export async function getServerSideProps({ params }) {
    const user = await fetchUser(params.id);
    const posts = await fetchUserPosts(params.id);

    return {
        props: {
            user,
            posts,
        },
    };
}

const UserPage = ({ user, posts }) => {
    return (
        <div style={{textAlign: 'center', fontFamily: 'Roboto, sans-serif', minHeight: '100vh', color: '#000'}}>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <h2>Company</h2>
            <p>{user.company.name}</p>
            <h2>Posts by {user.name}</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}> {/* Remove bullet points */}
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPage;
