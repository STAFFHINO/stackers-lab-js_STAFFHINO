import React, { useState } from 'react';
import Album from './Album';

const albumsData = [
    {
        id: 1,
        title: 'The World EP.Fin : Will',
        songs: ['We Know', 'Emergency', 'Crazy Form (미친 폼)', 'Arriba', 'Silver Light', 'Crescent Part.2',
            'Dreamy Day (꿈날)', 'Matz', 'Its You', 'Youth', 'Everything', 'Fin : Will'],
        image: './ATEEZ.png'
    },
    {
        id: 2,
        title: '5-Star',
        songs: ['Hall of Fame', 'S-Class', 'Item', 'Super Bowl', 'Topline', 'DLC',
            'Get Lit', 'Collision', 'FNF', 'Youtiful', 'The Sound (Korean ver.)', 'Mixtape : Time Out'],
        image: './StrayKids.png'
    }
];

function AlbumList() {
    const [albums, setAlbums] = useState(albumsData);

    const toggleSongs = id => {
        setAlbums(albums.map(album => {
            if (album.id === id) {
                return { ...album, showSongs: !album.showSongs };
            }
            return album;
        }));
    }

    return (
        <div>
            {albums.map(album => (
                <Album
                    key={album.id}
                    title={album.title}
                    songs={album.songs}
                    showSongs={album.showSongs}
                    onToggleSongs={() => toggleSongs(album.id)}
                />
            ))}
        </div>
    );
}

export default AlbumList;