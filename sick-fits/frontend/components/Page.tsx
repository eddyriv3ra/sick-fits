import { ReactElement, ReactNode } from 'react';
import Header from './Header';

interface PageProps {
	children: ReactNode;
}

const Page = ({ children }: PageProps): ReactElement => {
	return (
		<>
			<Header />
			<div>I am the page component</div>
			{children}
		</>
	);
};

export default Page;
