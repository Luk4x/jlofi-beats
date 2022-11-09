import config from '../../../config.json';
import { StyledHeader } from './styles';

export default function Header() {
    return (
        <StyledHeader>
            <img
                src={`https://github.com/${config.githubUser}.png`}
                alt="Luk4x Github Profile Photo"
                width={90}
                height={90}
            />
            <div>
                <h2>{config.name}</h2>
                <p>{config.description}</p>
            </div>
        </StyledHeader>
    );
}
