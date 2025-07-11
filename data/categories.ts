import { ICategory } from '@/types';

export const categories: ICategory[] = [
	{
		id: '8e03de6e-ae4b-40a1-8bb9-8d530f65b065',
		name: 'Puzzle',
		slug: 'puzzle',
		icon: '🧩',
		description: 'Games that challenge your problem-solving skills and logic.',
		games: 12,
		createdAt: '2024-01-01',
		updatedAt: '2024-06-01',
	},
	{
		id: '8e03de6e-ae4b-40a1-8bb9-8d530f65b066',
		name: 'Action',
		slug: 'action',
		icon: '⚔️',
		description: 'Fast-paced games that require quick reflexes and strategy.',
		games: 15,
		createdAt: '2024-01-02',
		updatedAt: '2024-06-01',
	},
	{
		id: '8e03de6e-ae4b-40a1-8bb9-8d530f65b067',
		name: 'Word',
		slug: 'word',
		icon: '📚',
		description: 'Games that enhance your vocabulary and spelling skills.',
		games: 10,
		createdAt: '2024-01-03',
		updatedAt: '2024-06-01',
	},
	{
		id: '8e03de6e-ae4b-40a1-8bb9-8d530f65b068',
		name: 'Strategy',
		slug: 'strategy',
		icon: '♟️',
		description: 'Games that require careful planning and tactical thinking.',
		games: 8,
		createdAt: '2024-01-04',
		updatedAt: '2024-06-01',
	},
	{
		id: '8e03de6e-ae4b-40a1-8bb9-8d530f65b069',
		name: 'Brain',
		slug: 'brain',
		icon: '🧠',
		description: 'Games designed to improve cognitive skills and memory.',
		games: 6,
		createdAt: '2024-01-05',
		updatedAt: '2024-06-01',
	},
	{
		id: '8e03de6e-ae4b-40a1-8bb9-8d530f65b070',
		name: 'Arcade',
		slug: 'arcade',
		icon: '🎮',
		description: 'Classic arcade games that test your reflexes and skills.',
		games: 9,
		createdAt: '2024-01-06',
		updatedAt: '2024-06-01',
	},
	{
		id: '8e03de6e-ae4b-40a1-8bb9-8d530f65b071',
		name: 'Adventure',
		slug: 'adventure',
		icon: '🌍',
		description: 'Explorative games that take you on epic journeys.',
		games: 7,
		createdAt: '2024-01-07',
		updatedAt: '2024-06-01',
	},
	{
		id: '8e03de6e-ae4b-40a1-8bb9-8d530f65b072',
		name: 'Simulation',
		slug: 'simulation',
		icon: '🛠️',
		description: 'Games that simulate real-world activities and scenarios.',
		games: 5,
		createdAt: '2024-01-08',
		updatedAt: '2024-06-01',
	},
	{
		id: '8e03de6e-ae4b-40a1-8bb9-8d530f65b073',
		name: 'Card',
		slug: 'card',
		icon: '🃏',
		description: 'Card games that test your strategy and luck.',
		games: 4,
		createdAt: '2024-01-09',
		updatedAt: '2024-06-01',
	},
	{
		id: '8e03de6e-ae4b-40a1-8bb9-8d530f65b074',
		name: 'Sports',
		slug: 'sports',
		icon: '⚽',
		description: 'Games that simulate various sports activities.',
		games: 3,
		createdAt: '2024-01-10',
		updatedAt: '2024-06-01',
	},
	{
		id: '8e03de6e-ae4b-40a1-8bb9-8d530f65b075',
		name: 'Music',
		slug: 'music',
		icon: '🎵',
		description: 'Games that involve music and rhythm challenges.',
		games: 2,
		createdAt: '2024-01-11',
		updatedAt: '2024-06-01',
	},
];

export const categoryMap: Map<string, ICategory> = new Map(categories.map((category) => [category.slug, category]));

// Helper function to get a category by slug
export const getCategoryBySlug = (slug: string): ICategory | undefined => {
	return categoryMap.get(slug);
};
