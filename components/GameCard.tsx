'use client';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { IGame } from '@/types';
import { StarIcon, UsersIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface IGameCardProps {
	game: IGame;
}

const difficultyColors: Record<string, string> = {
	Easy: 'bg-green-100 text-green-800',
	Medium: 'bg-yellow-100 text-yellow-800',
	Hard: 'bg-red-100 text-red-800',
};

export default function GameCard({ game }: IGameCardProps) {
	// Helper function to format player count
	const formatPlayerCount = (players: number): string => {
		if (players >= 1000) {
			return (players / 1000).toFixed(1) + 'K';
		}
		return players.toString();
	};

	return (
		<Link
			href={`/games/${game.slug}`}
			className="block hover:shadow-lg transition-all duration-200 hover:scale-[1.02] overflow-hidden rounded-lg bg-white shadow-md"
		>
			{/* Game Image */}
			<div className="relative h-48 w-full">
				<Image
					src={game.image || `https://placehold.co/400x300.png?text=${encodeURIComponent(game.name)}`}
					alt={game.name}
					fill
					className="object-cover transition-transform duration-300 hover:scale-105"
					sizes="(max-width: 768px) 100vw, 400px"
				/>

				{/* Category Badge */}
				<div className="absolute top-3 left-3">
					<Badge
						variant="secondary"
						className="bg-black/70 backdrop-blur-sm text-white border-0 flex items-center space-x-1"
					>
						{game.category}
					</Badge>
				</div>

				{/* Rating Badge */}
				<div className="absolute top-3 right-3">
					<Badge
						variant="secondary"
						className="bg-black/70 backdrop-blur-sm text-yellow-300 border-0 flex items-center space-x-1"
					>
						<StarIcon className="h-3 w-3 fill-current" />
						<span>{game.rating}</span>
					</Badge>
				</div>
			</div>

			{/* Game Info */}
			<div className="p-4">
				{/* Name */}
				<h3 className="text-lg font-semibold text-gray-900 mb-2">{game.name}</h3>

				{/* Bottom Info */}
				<div className="flex justify-between items-center">
					<Badge
						variant="outline"
						className={cn('text-xs', difficultyColors[game.difficulty] || 'bg-gray-100 text-gray-800')}
					>
						{game.difficulty}
					</Badge>

					<span className="text-xs text-gray-500 flex items-center">
						<UsersIcon className="h-3 w-3 mr-1" />
						{formatPlayerCount(game.players)}
					</span>
				</div>
			</div>
		</Link>
	);
}
