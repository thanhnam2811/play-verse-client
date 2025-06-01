import { IGame } from '@/types';
import { gameDetails } from './game-details';

export const games: IGame[] = gameDetails;

// Helper function to get a game by slug
export const getGameBySlug = (slug: string): IGame | undefined => {
	return games.find((game) => game.slug === slug);
};

// Helper function to get games by category
export const getGamesByCategory = (category: string): IGame[] => {
	return games.filter((game) => game.category === category);
};

// Helper function to get featured games (top rated)
export const getFeaturedGames = (limit: number = 6): IGame[] => {
	return games.sort((a, b) => b.rating - a.rating).slice(0, limit);
};

// Helper function to get popular games (most players)
export const getPopularGames = (limit: number = 4): IGame[] => {
	return games.sort((a, b) => b.players - a.players).slice(0, limit);
};
