import { IData } from './IData';

export interface ICategory extends IData {
	name: string;
	slug: string;
	description: string;

	icon: string;

	games: number;
}
