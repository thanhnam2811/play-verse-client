import { IData } from './IData';

export interface IGame extends IData {
	name: string;
	slug: string;
	category: string;
	image: string;
	rating: number;
	difficulty: string;
	players: number;
}

export interface IGameDetail extends IGame {
	developer: string;
	description: string;
	releaseDate: string;
	tags: string[];
	features: string[];
}
