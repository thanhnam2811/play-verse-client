import { Gamepad, X, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Logo and Description */}
					<div className="col-span-1 md:col-span-2">
						<div className="flex items-center space-x-2 mb-4">
							<Gamepad className="h-8 w-8 text-purple-400" />
							<span className="text-2xl font-bold">PlayVerse</span>
						</div>
						<p className="text-gray-400 mb-6 max-w-md">
							The ultimate gaming platform where players from around the world come together to compete,
							have fun, and discover amazing minigames.
						</p>
						<div className="flex space-x-4">
							<a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
								<X className="h-6 w-6" />
							</a>
							<a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
								<Facebook className="h-6 w-6" />
							</a>
							<a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
								<Instagram className="h-6 w-6" />
							</a>
							<a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
								<Youtube className="h-6 w-6" />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									All Games
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									Tournaments
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									Leaderboard
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									Community
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									News
								</a>
							</li>
						</ul>
					</div>

					{/* Support */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Support</h3>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									Help Center
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									Contact Us
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									Terms of Service
								</a>
							</li>
							<li>
								<a href="#" className="text-gray-400 hover:text-white transition-colors">
									Bug Reports
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-400 text-sm">© 2025 PlayVerse. All rights reserved.</p>
					<p className="text-gray-400 text-sm mt-2 md:mt-0">Made with ❤️ for gamers worldwide</p>
				</div>
			</div>
		</footer>
	);
}
