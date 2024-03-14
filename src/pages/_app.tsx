import type {ReactElement, ReactNode} from "react"
import type {NextPage} from "next"
import type {AppProps} from "next/app"
import "../app/globals.css"
import CommonLayout from "~/components/structures/CommonLayout";
import {Quicksand} from "next/font/google";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const quicksand = Quicksand({
    subsets: ["latin"],
    variable: "--font-quicksand",
});
export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
    return <CommonLayout className={quicksand.variable}>
        <Component {...pageProps} />
    </CommonLayout>
}