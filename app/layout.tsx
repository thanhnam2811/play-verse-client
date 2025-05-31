import AppSidebar from '@/components/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css';
import { ICategory } from '@/types';

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

const categories: ICategory[] = [
	{ code: 'Action', title: 'Action', gameCount: 24, icon: '⚡', description: 'Action' },
	{ code: 'Puzzle', title: 'Puzzle', gameCount: 18, icon: '🧩', description: 'Puzzle' },
	{ code: 'Strategy', title: 'Strategy', gameCount: 15, icon: '🏰', description: 'Strategy' },
	{ code: 'Arcade', title: 'Arcade', gameCount: 32, icon: '🎮', description: 'Arcade' },
	{ code: 'Brain', title: 'Brain', gameCount: 12, icon: '🧠', description: 'Brain' },
	{ code: 'Word', title: 'Word', gameCount: 9, icon: '📝', description: 'Word' },
];

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
