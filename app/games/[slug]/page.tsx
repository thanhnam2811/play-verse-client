'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeftIcon, PlayIcon, StarIcon, UsersIcon, TimerIcon, ShareIcon, HeartIcon } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getGameDetailBySlug } from '@/data/game-details';

export default function GamePage() {
	const params = useParams();
	const gameSlug = params.slug as string;
	const game = getGameDetailBySlug(gameSlug);

	if (!game) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-gray-900 mb-4">Game Not Found</h1>
					<p className="text-gray-600 mb-6">The game you&apos;re looking for doesn&apos;t exist.</p>
					<Link href="/">
						<Button>
							<ArrowLeftIcon className="h-4 w-4 mr-2" />
							Back to Home
						</Button>
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<div className="bg-white border-b">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<Link
						href="/"
						className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
					>
						<ArrowLeftIcon className="h-4 w-4 mr-2" />
						Back to Games
					</Link>
				</div>
			</div>

			{/* Game Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Main Content */}
					<div className="lg:col-span-2">
						{/* Game Image */}
						<Card className="overflow-hidden mb-6">
							<div className="relative">
								<div className="h-96 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
									<PlayIcon className="h-24 w-24 text-white opacity-80" />
								</div>
								<div className="absolute top-4 left-4">
									<Badge
										variant="secondary"
										className="bg-black/20 backdrop-blur-sm text-white border-0"
									>
										{game.category}
									</Badge>
								</div>
								<div className="absolute top-4 right-4 flex space-x-2">
									<Badge
										variant="secondary"
										className="bg-black/20 backdrop-blur-sm text-white border-0 flex items-center space-x-1"
									>
										<StarIcon className="h-3 w-3 fill-current" />
										<span>{game.rating}</span>
									</Badge>
								</div>
							</div>
						</Card>

						{/* Game Info */}
						<div className="mb-6">
							<h1 className="text-3xl font-bold text-gray-900 mb-2">{game.name}</h1>
							<p className="text-lg text-gray-600 mb-4">{game.description}</p>
						</div>

						{/* Tags */}
						<div className="mb-6">
							<h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
							<div className="flex flex-wrap gap-2">
								{game.tags.map((tag, index) => (
									<Badge key={index} variant="outline" className="text-sm">
										{tag}
									</Badge>
								))}
							</div>
						</div>

						{/* Features */}
						<div className="mb-6">
							<h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{game.features.map((feature, index) => (
									<div key={index} className="flex items-center text-gray-700">
										<div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
										{feature}
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div className="lg:col-span-1">
						<Card className="sticky top-4">
							<CardContent className="p-6">
								{/* Play Button */}
								<Button
									size="lg"
									className="w-full mb-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-medium text-lg py-3"
								>
									<PlayIcon className="h-5 w-5 mr-2" />
									Play Now
								</Button>

								{/* Action Buttons */}
								<div className="flex space-x-2 mb-6">
									<Button variant="outline" size="sm" className="flex-1">
										<HeartIcon className="h-4 w-4 mr-2" />
										Favorite
									</Button>
									<Button variant="outline" size="sm" className="flex-1">
										<ShareIcon className="h-4 w-4 mr-2" />
										Share
									</Button>
								</div>

								{/* Game Stats */}
								<div className="space-y-4">
									<div className="flex justify-between items-center">
										<span className="text-gray-600">Players</span>
										<div className="flex items-center text-gray-900">
											<UsersIcon className="h-4 w-4 mr-1" />
											{game.players.toLocaleString()}
										</div>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-gray-600">Difficulty</span>
										<Badge variant="outline" className="flex items-center">
											<TimerIcon className="h-3 w-3 mr-1" />
											{game.difficulty}
										</Badge>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-gray-600">Developer</span>
										<span className="text-gray-900">{game.developer}</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-gray-600">Release</span>
										<span className="text-gray-900">{game.releaseDate}</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
