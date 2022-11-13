import { StyledHeader, StyledBanner } from './styles';

export default function Header() {
    return (
        <StyledHeader>
            <StyledBanner />
            <div className="user-info">
                <img
                    src={`https://github.com/Luk4x.png`}
                    alt="Luk4x Github Profile Photo"
                    width={90}
                    height={90}
                />
                <div>
                    <h2>Lucas Maciel</h2>
                    <p>Desenvolvedor Front-end</p>
                </div>
            </div>
        </StyledHeader>
    );
}
