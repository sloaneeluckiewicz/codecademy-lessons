import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function SocialNetwork() {
    const [data, setData]= useState(null);
    const [menu, setMenu]= useState(null);
    const [newsFeed, setNewsFeed]= useState(null);
    const [friends, setFriends] = useState(null);

    useEffect(() => {
        Promise.all([get('/menu'), get('/news-feed'), get('friends')]).then(
            ([menuResponse, newsFeedResponse, friendsResponse]) => {
                setMenu({
                    menu: menuResponse.data
                });
                setNewsFeed({
                    newsFeed: newsFeedResponse.data
                });
                setFriends({
                    friends: friendsResponse.data
                });
            }
        );
    }, []);

    return(
        <div className='App'>
            <h1>My Network</h1>
            {!setMenu || !setMenu ? <p>Loading..</p> : (
                <nav>
                    {setMenu.map((menuItem)=> (
                        <button key={menuItem}>{menuItem}</button>
                    ))}
                </nav>
            )}
            <div className='content'>
                {!setMenu || !setNewsFeed ? <p>Loading..</p> : (
                    <section>
                        {setNewsFeed.map(({ id, title, message, imgSrc })=> (
                            <article key={id}>
                            <h3>{title}</h3>
                            <p>{message}</p>
                            <img src={imgSrc} alt='' />
                        </article>
                        ))}
                    </section>
                )}
                {!data || !setFriends ? <p>Loading..</p> : (
                    <aside>
                        <ul>
                            {setFriends
                                .sort((a,b)=> (a.isOnline && !b.isOnline ? -1 : 0))
                                .map(({ id, name, isOnline })=> (
                                    <li key={id} className={isOnline ? 'online' : 'offline'}>
                                        {name}
                                    </li>
                                ))
                            }
                        </ul>
                    </aside>
                )}
            </div>
        </div>
    )
}

/*
It is a good idea to separate concerns by managing different data with different hooks.
Packaging data together makes the code look complex and hard to manage. 
*/