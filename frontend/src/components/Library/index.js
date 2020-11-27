import React from 'react';
import LibraryList from './LibraryList'
import GameDisplay from './GameDisplay'
import '../AppPage/AppPage.css';



const Library = () => {


    return (
        <div className='app_home__container'>
            <div className='app_library__container'>
                <LibraryList />
            </div>
            {/* <GameDisplay /> */}
        </div>
    )
}

export default Library