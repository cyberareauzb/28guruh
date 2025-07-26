import { useParams } from 'react-router-dom';

function PostPage() {

    let param = useParams()
    return (
        <div>
            <h1> {param.name}  Yangiligi sahifasi</h1>
        </div>
    );
}

export default PostPage;


