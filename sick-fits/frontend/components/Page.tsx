import { ReactElement, ReactNode } from 'react';
import Header from './Header';
import styled from 'styled-components';

const InnerStyles = styled.div`
	max-width: var(--maxWidth);
	margin: 0 auto;
	padding: 2rem;
`;
interface PageProps {
	children: ReactNode;
}

const Page = ({ children }: PageProps): ReactElement => {
	return (
		<>
			<Header />
			<InnerStyles>{children}</InnerStyles>
		</>
	);
};

export default Page;
