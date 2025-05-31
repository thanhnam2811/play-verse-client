import { StarIcon, PlayIcon, TimerIcon, UsersIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const featuredGames = [
	{
		id: 1,
		title: 'Puzzle Quest',
		description: 'Mind-bending puzzles that challenge your logic and creativity',
		image: '/api/placeholder/300/200',
		players: '2.5K',
		rating: 4.8,
		category: 'Puzzle',
		difficulty: 'Medium',
	},
	{
		id: 2,
		title: 'Speed Runner',
		description: 'Fast-paced racing through challenging obstacle courses',
		image: '/api/placeholder/300/200',
		players: '5.2K',
		rating: 4.9,
		category: 'Action',
		difficulty: 'Hard',
	},
	{
		id: 3,
		title: 'Word Wizard',
		description: 'Expand your vocabulary in this magical word adventure',
		image: '/api/placeholder/300/200',
		players: '1.8K',
		rating: 4.7,
		category: 'Word',
		difficulty: 'Easy',
	},
	{
		id: 4,
		title: 'Strategy Saga',
		description: 'Build empires and conquer kingdoms in this strategic masterpiece',
		image: '/api/placeholder/300/200',
		players: '3.7K',
		rating: 4.9,
		category: 'Strategy',
		difficulty: 'Hard',
	},
	{
		id: 5,
		title: 'Memory Master',
		description: 'Test and improve your memory with increasingly complex challenges',
		image: '/api/placeholder/300/200',
		players: '2.1K',
		rating: 4.6,
		category: 'Brain',
		difficulty: 'Medium',
	},
	{
		id: 6,
		title: 'Reflex Arena',
		description: 'Lightning-fast reactions determine victory in this intense arena',
		image: '/api/placeholder/300/200',
		players: '4.3K',
		rating: 4.8,
		category: 'Arcade',
		difficulty: 'Hard',
	},
];

export default function Home() {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Featured Games */}
			<section className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center mb-8">
						<div>
							<h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Games</h2>
							<p className="text-gray-600">Most popular games right now</p>
						</div>
						<Button variant="ghost" className="text-purple-600 hover:text-purple-700 font-medium">
							View All Games →
						</Button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{featuredGames.map((game) => (
							<Card key={game.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
								<div className="relative">
									<div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
										<PlayIcon className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
									</div>
									<div className="absolute top-4 left-4">
										<Badge
											variant="secondary"
											className="bg-black/20 backdrop-blur-sm text-white border-0"
										>
											{game.category}
										</Badge>
									</div>
									<div className="absolute top-4 right-4">
										<Badge
											variant="secondary"
											className="bg-black/20 backdrop-blur-sm text-white border-0 flex items-center space-x-1"
										>
											<StarIcon className="h-3 w-3 fill-current" />
											<span>{game.rating}</span>
										</Badge>
									</div>
								</div>

								<CardContent className="p-6">
									<CardHeader className="p-0 mb-4">
										<CardTitle className="text-xl">{game.title}</CardTitle>
										<CardDescription className="text-sm">{game.description}</CardDescription>
									</CardHeader>

									<div className="flex justify-between items-center mb-4">
										<div className="flex items-center space-x-4 text-sm text-gray-500">
											<span className="flex items-center space-x-1">
												<UsersIcon className="h-4 w-4" />
												<span>{game.players}</span>
											</span>
											<Badge variant="outline" className="text-xs">
												<TimerIcon className="h-3 w-3 mr-1" />
												{game.difficulty}
											</Badge>
										</div>
									</div>

									<Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 font-medium">
										<PlayIcon className="h-4 w-4 mr-2" />
										Play Now
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Popular Games */}
			<section className="py-12 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mb-8">
						<h2 className="text-2xl font-bold text-gray-900 mb-2">Popular This Week</h2>
						<p className="text-gray-600">Trending games that everyone is playing</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{featuredGames.slice(0, 4).map((game) => (
							<Card
								key={`popular-${game.id}`}
								className="overflow-hidden hover:shadow-lg transition-all duration-200 group"
							>
								<div className="relative">
									<div className="h-32 bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
										<PlayIcon className="h-12 w-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
									</div>
									<div className="absolute top-3 right-3">
										<Badge
											variant="secondary"
											className="bg-black/20 backdrop-blur-sm text-white border-0 text-xs flex items-center space-x-1"
										>
											<StarIcon className="h-3 w-3 fill-current" />
											<span>{game.rating}</span>
										</Badge>
									</div>
								</div>

								<CardContent className="p-4">
									<h3 className="font-semibold text-gray-900 mb-1">{game.title}</h3>
									<p className="text-sm text-gray-600 mb-3 line-clamp-2">{game.description}</p>

									<div className="flex justify-between items-center mb-3">
										<Badge variant="outline" className="text-xs">
											{game.category}
										</Badge>
										<span className="text-xs text-gray-500 flex items-center">
											<UsersIcon className="h-3 w-3 mr-1" />
											{game.players}
										</span>
									</div>

									<Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
										<PlayIcon className="h-3 w-3 mr-2" />
										Play
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
