import { ReactElement } from 'react';
import Link from 'next/link';
import Nav from './Nav';

const Header = (): ReactElement => {
	return (
		<header>
			<div className="bar">
				<Link href="/">Sick Fits</Link>
			</div>
			<div className="sub-bar">
				<p>Search</p>
			</div>
			<Nav />
		</header>
	);
};

export default Header;
