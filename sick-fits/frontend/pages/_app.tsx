import React, { ReactElement } from 'react';
import Page from '../components/Page';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
	return (
		<Page>
			<Component {...pageProps} />
		</Page>
	);
};

export default MyApp;
