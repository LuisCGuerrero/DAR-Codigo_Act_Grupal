import React from 'react';
import './styles/SongFeed.css'; 
import SongItem from './SongItem';

const imagesPathCommon = '/img/SongFeed/';

const songData = [
  { id: 1, image: imagesPathCommon + 'likedSongs.jpeg', title: 'Canciones que te gustan', description: '' },
  { id: 2, image: imagesPathCommon + 'taylorSwiftIcon.jpeg', title: 'Taylor Swift', description: '' },
  { id: 3, image: imagesPathCommon + 'quevedoIcon.jpeg', title: 'Quevedo', description: '' },
  { id: 4, image: imagesPathCommon + 'badBunnyIcon.jpeg', title: 'Bad Bunny', description: '' },
  { id: 5, image: imagesPathCommon + 'estopaIcon.jpeg', title: 'Estopa', description: '' },
  { id: 6, image: imagesPathCommon + 'youngMikoIcon.jpeg', title: 'Young Miko', description: ''}
];

function SongFeed() {
  return (
    <div className="song-feed">
      <h2>¡Buenos días!</h2>
      <div className="song-list">
        {songData.map(song => (
          <SongItem key={song.id} image={song.image} title={song.title} description={song.description} />
        ))}
      </div>
    </div>
  );
}

export default SongFeed;
