import "../styles/globals.css";
import {
  QueryClientProvider,
  QueryClient,
  useIsFetching,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
