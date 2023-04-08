import internal from 'stream';

export type Movie = {
    movieId: number;
    category: string;
    title: string;
    year: number;
    director: string;
    rating: string;
    edited: boolean;
    lentTo: string;
    notes: string;
};
