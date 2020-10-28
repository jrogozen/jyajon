import React from 'react';
import Link from 'next/link';

const Header = (): JSX.Element => {
    return (
        <>
            <nav>
                <h1>@jyaajon</h1>
                <div>
                    <Link href="/">
                        <a>blog</a>
                    </Link>
                    <Link href="/">
                        <a>About</a>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Header;
