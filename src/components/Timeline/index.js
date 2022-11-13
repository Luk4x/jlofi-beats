import { useEffect, useState } from 'react';
import config from '../../../config.json';
import { StyledTimeline } from './styles';
import { youtubeAPI } from '../../lib/axios';

export default function Timeline({ searchValue }) {
    const playlistNames = Object.keys(config.playlists);
    const [youtubeData, setYoutubeData] = useState({});

    useEffect(() => {
        (async () => {
            const [firstChannelInfoResponse, secondChannelInfoResponse] = await Promise.all([
                youtubeAPI.get(
                    'channels?part=snippet%2CcontentDetails&id=UC2fVSthyWxWSjsiEAHPzriQ'
                ),
                youtubeAPI.get('channels?part=snippet%2CcontentDetails&id=UCxONCRXEhzv0cRbWCKybOsw')
            ]);

            const firstChannelInfo = firstChannelInfoResponse.data.items[0];
            const secondChannelInfo = secondChannelInfoResponse.data.items[0];

            const [firstChannelVideosResponse, secondChannelVideosResponse] = await Promise.all([
                youtubeAPI.get(
                    `playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${firstChannelInfo.contentDetails.relatedPlaylists.uploads}`
                ),
                youtubeAPI.get(
                    `playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${secondChannelInfo.contentDetails.relatedPlaylists.uploads}`
                )
            ]);

            const firstChannelVideos = firstChannelVideosResponse.data.items;
            const secondChannelVideos = secondChannelVideosResponse.data.items;

            setYoutubeData({
                channelsInfo: [firstChannelInfo, secondChannelInfo],
                channelsVideos: [firstChannelVideos, secondChannelVideos]
            });
        })();
    }, []);

    return (
        <StyledTimeline>
            {youtubeData.channelsInfo?.map((channel, index) => {
                console.log(channel);
                return (
                    <section key={channel.id}>
                        <div className="profile">
                            <img
                                src={channel.snippet.thumbnails.medium.url}
                                alt={`${channel.snippet.title} profile picture`}
                            />
                            <h3>{channel.snippet.title}</h3>
                        </div>
                        <div className="carrousel">
                            {youtubeData.channelsVideos[index]
                                .filter(video => {
                                    const videoTitleNormalized = video.snippet.title.toLowerCase();
                                    const SearchValueNormalized = searchValue
                                        ? searchValue.toLowerCase()
                                        : '';
                                    return videoTitleNormalized.includes(SearchValueNormalized);
                                })
                                .map(filteredVideos => {
                                    return (
                                        <a
                                            key={filteredVideos.snippet.resourceId.videoId}
                                            href={`https://www.youtube.com/watch?v=${filteredVideos.snippet.resourceId.videoId}`}
                                        >
                                            <img
                                                src={filteredVideos.snippet.thumbnails.standard.url}
                                                alt={`${filteredVideos.snippet.title} Thumb`}
                                            />
                                            <h4>{filteredVideos.snippet.title}</h4>
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
