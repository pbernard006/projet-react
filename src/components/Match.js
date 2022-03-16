import { useParams } from 'react-router-dom';

function Match() {
    const { id } = useParams();
    console.log(id);

    return <div>coucou</div>;
}

export default Match;
