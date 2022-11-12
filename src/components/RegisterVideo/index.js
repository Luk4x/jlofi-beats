import { useState } from 'react';
import { StyledRegisterVideo } from './styles';

function useForm() {
    const [formValues, setFormValues] = useState({ title: '', url: '' });

    const handleChange = e => {
        const eName = e.target.name;
        const eValue = e.target.value;
        setFormValues({ ...formValues, [eName]: eValue });
    };

    const clearForm = () => {
        setFormValues({});
    };

    return {
        formValues,
        handleChange,
        clearForm
    };
}

export default function RegisterVideo() {
    const [formVisibility, setFormVisibility] = useState(false);
    const formRegister = useForm();

    function formSubmission(e) {
        e.preventDefault();

        console.log(formRegister.formValues);

        setFormVisibility(false);
        formRegister.clearForm();
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
                            placeholder="Título do Vídeo"
                            type="text"
                            name="title"
                            value={formRegister.formValues.title}
                            onChange={formRegister.handleChange}
                            required
                        />
                        <input
                            placeholder="URL do Vídeo"
                            type="text"
                            name="url"
                            value={formRegister.formValues.url}
                            onChange={formRegister.handleChange}
                            required
                        />
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            )}
        </StyledRegisterVideo>
    );
}
