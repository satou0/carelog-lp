import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://versel-coral-five.vercel.app"),
	title: "ケアログAI — 親の介護記録・家族共有AIアプリ",
	description:
		"高齢の親を介護する家族向けの介護記録アプリ。タップで記録、AIが週次サマリと受診メモを自動生成。家族で安全に共有できます。",
	openGraph: {
		title: "ケアログAI — 親の介護記録・家族共有AIアプリ",
		description:
			"高齢の親を介護する家族向けの介護記録アプリ。タップで記録、AIが週次サマリと受診メモを自動生成。",
		locale: "ja_JP",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col bg-white text-gray-900">
				{children}
				<Analytics />
			</body>
		</html>
	);
}
