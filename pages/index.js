import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const HomePage = () => {
	const { data: session, status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status === 'unauthenticated') {
			router.push('/login');
		}
	}, [status, router]);

	return <Layout>HomePage</Layout>;
};

export default HomePage;
