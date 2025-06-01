import { Button } from '@/components/ui/button';
import GameCard from '@/components/GameCard';
import { getFeaturedGames, getPopularGames } from '@/data/games';

export default function Home() {
	const featuredGames = getFeaturedGames(12);
	const popularGames = getPopularGames(4);
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

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{featuredGames.map((game) => (
							<GameCard key={game.id} game={game} />
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
						{popularGames.map((game) => (
							<GameCard key={`popular-${game.id}`} game={game} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
