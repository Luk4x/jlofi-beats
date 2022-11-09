import config from '../../../config.json';
import { StyledTimeline } from './styles';

export default function Timeline() {
    const playlistNames = Object.keys(config.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map(playlistName => {
                const playlistVideos = config.playlists[playlistName];

                return (
                    <section>
                        <h3>{playlistName}</h3>
                        <div>
                            {playlistVideos.map(playlistVideo => {
                                return (
                                    <a href={playlistVideo.url}>
                                        <img
                                            src={playlistVideo.thumb}
                                            alt={`${playlistVideo.title} Thumb`}
                                        />
                                        <h4>{playlistVideo.title}</h4>
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
