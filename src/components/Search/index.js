import { StyledSearch } from './styles';

export default function Search({ searchValue, setSearchValue }) {
    return (
        <StyledSearch>
            <input type="text" onChange={e => setSearchValue(e.target.value)} value={searchValue} />
            <button>🔎</button>
        </StyledSearch>
    );
}
