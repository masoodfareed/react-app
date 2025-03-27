import { useState } from "react";

function Home()
{
    const [name, setName] = useState('');
    return(
        <div>
             <h3>Home Component</h3>
        </div>
    );
}

export default Home;