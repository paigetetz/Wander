import React from 'react';
import Search from './Search';
import Wander from './Wander.png';
import Post from './Post';

function Home({search, setSearch}) {
    
    return (
        <div>
            <img src={Wander} alt="Wander" />
        <div className='search_div' div>
            <h2>Start your journey!</h2>
            <Search search={search} setSearch={setSearch}  />
            <Post/>
        
        </div>   
        </div>
    );
}

export default Home;