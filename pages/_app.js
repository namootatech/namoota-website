import Layout from '../components/Layout';
import AppLayout from '@/components/AppLayout';
import '../styles/globals.css';
import { AuthProvider } from '../util/auth/context';

export default function App({ Component, pageProps }) {
  const isAppRoute =
    typeof window !== 'undefined' &&
    window.location.pathname.split('/').includes('app');
  const LayoutComponent = isAppRoute ? AppLayout : Layout;
  return (
    <AuthProvider>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </AuthProvider>
  );
}
