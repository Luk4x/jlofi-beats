import { useEffect, useState } from 'react';
import { StyledTimeline } from './styles';
import { youtubeAPI } from '../../lib/axios';
import { customPlaylist } from '../../lib/customPlaylist';

export default function Timeline({ searchValue }) {
    const [youtubeData, setYoutubeData] = useState({});
    const supabaseCustomPlaylist = customPlaylist();
    const [supabasePlayList, setSupabasePlaylist] = useState([]);

    useEffect(() => {
        (async function getYoutubeData() {
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

        (async function getSupabaseData() {
            const supabaseVideosId = await supabaseCustomPlaylist.select('*');

            const youtubeVideos = [];

            supabaseVideosId.data.forEach(async ({ videoId }) => {
                const video = await youtubeAPI.get(
                    `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`
                );

                youtubeVideos.push(video.data.items[0]);
            });

            setSupabasePlaylist(youtubeVideos);
        })();
    }, []);

    return (
        <StyledTimeline>
            {youtubeData.channelsInfo &&
                youtubeData.channelsInfo.map((channel, index) => {
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
                                        const videoTitleNormalized =
                                            video.snippet.title.toLowerCase();
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
                                                    src={
                                                        filteredVideos.snippet.thumbnails.standard
                                                            .url
                                                    }
                                                    alt={`${filteredVideos.snippet.title} Thumbnail`}
                                                />
                                                <h4>{filteredVideos.snippet.title}</h4>
                                            </a>
                                        );
                                    })}
                            </div>
                        </section>
                    );
                })}
            <section>
                <div className="profile">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7M4Z0v1HP2Z9tZmfQaZFCuspezuoxter_A&usqp=CAU"
                        alt="generic user picture"
                    />
                    <h3>Users Lofi Playlist</h3>
                </div>
                <div className="carrousel">
                    {supabasePlayList
                        .filter(video => {
                            console.log(video);
                            const videoTitleNormalized = video.snippet.title.toLowerCase();
                            const SearchValueNormalized = searchValue
                                ? searchValue.toLowerCase()
                                : '';
                            return videoTitleNormalized.includes(SearchValueNormalized);
                        })
                        .map(filteredVideos => {
                            return (
                                <a
                                    key={filteredVideos.id}
                                    href={`https://www.youtube.com/watch?v=${filteredVideos.id}`}
                                >
                                    <img
                                        src={filteredVideos.snippet.thumbnails.standard.url}
                                        alt={`${filteredVideos.snippet.title} Thumbnail`}
                                    />
                                    <h4>{filteredVideos.snippet.title}</h4>
                                </a>
                            );
                        })}
                </div>
            </section>
        </StyledTimeline>
    );
}
