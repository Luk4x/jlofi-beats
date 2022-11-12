import { useState } from 'react';
import Navigation from '../src/components/Navigation';
import Header from '../src/components/Header';
import Timeline from '../src/components/Timeline';
import RegisterVideo from '../src/components/RegisterVideo';

export default function Home() {
    const [searchValue, setSearchValue] = useState();

    return (
        <div>
            <Navigation searchValue={searchValue} setSearchValue={setSearchValue} />
            <Header />
            <Timeline searchValue={searchValue} />
            <RegisterVideo />
        </div>
    );
}
