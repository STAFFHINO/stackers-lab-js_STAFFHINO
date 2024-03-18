import React from 'react';

function Album({ title, songs, image, showSongs, onToggleSongs }) {
    return (
        <div>
            <img src={image} alt={image} style={{width: '100px', height: '100px'}}/>
            <h2 onClick={onToggleSongs}>{title}
            </h2>
            {showSongs && (
                <ul>
                    {songs.map((song, index) => (
                        <li key={index}>{song}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Album;