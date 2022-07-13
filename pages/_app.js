import '../styles/globals.css';
import { CookiesProvider } from 'react-cookie';

import { SessionProvider } from 'next-auth/react';

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		// `session` comes from `getServerSideProps` or `getInitialProps`.
		// Avoids flickering/session loading on first load.
		<CookiesProvider>
			<SessionProvider session={session} refetchInterval={5 * 60}>
				<Component {...pageProps} />
			</SessionProvider>
		</CookiesProvider>
	);
}
