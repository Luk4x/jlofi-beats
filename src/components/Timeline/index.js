import { useEffect, useState } from 'react';
import config from '../../../config.json';
import { StyledTimeline } from './styles';

export default function Timeline({ searchValue }) {
    const playlistNames = Object.keys(config.playlists);
    const [playlists, setPlaylists] = useState('');

    console.log();

    useEffect(() => {
        fetch(
            `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC2fVSthyWxWSjsiEAHPzriQ&maxResults=25&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
        )
            .then(data => data.json())
            .then(list => {
                console.log(list.items);
                setPlaylists(list.items);
            });
    }, []);

    /*
    return (
        <StyledTimeline>
            {playlists.map(playlist => {
                return (
                    <section key={playlist.id}>
                        <h3>{playlist.snippet.title}</h3>
                        <div>
                            <img src={playlist.snippet.thumbnails.medium.url} alt="video thumb" />
                        </div>
                    </section>
                );
            })}
        </StyledTimeline>
    )
    */

    return (
        <StyledTimeline>
            {playlistNames.map(playlistName => {
                const playlistVideos = config.playlists[playlistName];

                return (
                    <section key={playlistName}>
                        <h3>{playlistName}</h3>
                        <div>
                            {playlistVideos
                                .filter(playlistVideo => {
                                    const videoTitleNormalized = playlistVideo.title.toLowerCase();
                                    const SearchValueNormalized = searchValue
                                        ? searchValue.toLowerCase()
                                        : '';
                                    return videoTitleNormalized.includes(SearchValueNormalized);
                                })
                                .map(filteredVideos => {
                                    return (
                                        <a key={filteredVideos.url} href={filteredVideos.url}>
                                            <img
                                                src={filteredVideos.thumb}
                                                alt={`${filteredVideos.title} Thumb`}
                                            />
                                            <h4>{filteredVideos.title}</h4>
                                        </a>
                                    );
                                })}
                        </div>
                    </section>
                );
            })}
        </StyledTimeline>
    );
}
