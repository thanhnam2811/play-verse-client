import { AppSidebar, Footer, Header } from '@/components/layout';
import { SidebarProvider } from '@/components/ui/sidebar';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { categories } from '@/data';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'PlayVerse - Epic Minigames Universe',
	description:
		'Discover and play amazing minigames in the ultimate gaming platform. Join thousands of players in exciting challenges!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
				<SidebarProvider>
					<AppSidebar catagories={categories} />

					<div className="flex-1">
						<Header />

						<main>{children}</main>

						<Footer />
					</div>
				</SidebarProvider>
			</body>
		</html>
	);
}
