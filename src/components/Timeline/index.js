import config from '../../../config.json';
import { StyledTimeline } from './styles';

export default function Timeline({ searchValue }) {
    const playlistNames = Object.keys(config.playlists);

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
