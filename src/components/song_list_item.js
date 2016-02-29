import React from 'react';

const SongListItem = ({song}) => {
  return (
    <div>
      <div>
        Title: {song.title}
      </div>
      <div>
        Artist: {song.artist}
      </div>
    </div>
  );
};

export default SongListItem;