import * as React from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from '@/components/ui/sidebar';
import { ICategory } from '@/types';
import { GamepadIcon, StarIcon, TrophyIcon, UsersIcon } from 'lucide-react';
import Link from 'next/link';

interface IAppSidebarProps extends React.ComponentProps<typeof Sidebar> {
	catagories: ICategory[];
}

const generalNavItems = [
	{
		name: 'Leaderboard',
		href: '/leaderboard',
		icon: <TrophyIcon className="text-yellow-400 !size-5" />,
	},
	{
		name: 'Featured',
		href: '/featured',
		icon: <StarIcon className="text-purple-600 !size-5" />,
	},
	{
		name: 'Popular',
		href: '/popular',
		icon: <UsersIcon className="text-blue-600 !size-5" />,
	},
];

export function AppSidebar({ catagories, ...props }: IAppSidebarProps) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild size="lg" tooltip="Home">
							<Link href="/">
								<GamepadIcon className="text-purple-600 !size-8" />
								<span className="text-2xl font-bold text-gray-900">PlayVerse</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>General</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{generalNavItems.map((item) => (
								<SidebarMenuItem key={item.name}>
									<SidebarMenuButton asChild tooltip={item.name}>
										<Link href={item.href}>
											{item.icon}
											<span className="text-base font-semibold">{item.name}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarGroup>
					<SidebarGroupLabel>Categories</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{catagories.map((category) => (
								<SidebarMenuItem key={category.slug}>
									<SidebarMenuButton asChild tooltip={category.name}>
										<Link href={`/categories/${category.slug}`}>
											<span className="!size-4 flex items-center justify-center">
												{category.icon}
											</span>

											<span className="ml-2 flex-1 flex items-center gap-2">
												<span className="text-base font-semibold">{category.name}</span>
												<Badge
													variant="outline"
													className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums ml-auto"
												>
													{category.games}
												</Badge>
											</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter>
				<div className="md:hidden flex w-full items-center gap-2">
					<Button variant="outline" className="flex-1 w-full text-gray-700" asChild>
						<Link href="/auth/login">Login</Link>
					</Button>

					<Button className="flex-1 w-full bg-purple-600 text-white hover:bg-purple-700" asChild>
						<Link href="/auth/signup">Sign Up</Link>
					</Button>
				</div>
			</SidebarFooter>

			<SidebarRail />
		</Sidebar>
	);
}
