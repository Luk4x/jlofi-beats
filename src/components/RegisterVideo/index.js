import { useState } from 'react';
import { StyledRegisterVideo } from './styles';
import { customPlaylist } from '../../lib/customPlaylist';

export default function RegisterVideo() {
    const [formVisibility, setFormVisibility] = useState(false);
    const supabaseCustomPlaylist = customPlaylist();
    const [videoId, setVideoId] = useState('');

    function formSubmission(e) {
        e.preventDefault();

        supabaseCustomPlaylist
            .insert({ videoId })
            .then(data => console.log(data))
            .catch(err => console.error(err));

        setFormVisibility(false);
        setVideoId('');
    }

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisibility(true)}>
                +
            </button>
            {formVisibility && (
                <form onSubmit={formSubmission}>
                    <div>
                        <button
                            type="button"
                            className="close-modal"
                            onClick={() => setFormVisibility(false)}
                        >
                            X
                        </button>
                        <input
                            placeholder="URL ou ID do Vídeo"
                            type="text"
                            name="id"
                            value={videoId}
                            onChange={e => setVideoId(e.target.value)}
                            required
                        />
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            )}
        </StyledRegisterVideo>
    );
}
