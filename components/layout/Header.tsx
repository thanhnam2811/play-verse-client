'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSidebar } from '@/components/ui/sidebar';
import { Menu, SearchIcon } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
	const { toggleSidebar } = useSidebar();

	return (
		<header className="bg-white border-b border-gray-200 shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					{/* Sidebar Toggle Button */}
					<Button variant="outline" onClick={toggleSidebar} aria-label="Toggle sidebar">
						<Menu />
					</Button>

					{/* Search Bar */}
					<div className="items-center flex-1 max-w-md mx-2">
						<div className="relative w-full">
							<SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
							<Input placeholder="Search games..." className="pl-10 w-full" />
						</div>
					</div>

					{/* Login/Signup Buttons (Desktop) */}
					<div className="hidden md:flex items-center space-x-2">
						<Button variant="outline" className="text-gray-700" asChild>
							<Link href="/auth/login">Login</Link>
						</Button>

						<Button className="bg-purple-600 text-white hover:bg-purple-700" asChild>
							<Link href="/auth/signup">Sign Up</Link>
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
