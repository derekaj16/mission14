// This is the model on the frontend, just the same as it is on the backend

export type Movie = {
    movieId: number;
    category: string;
    title: string;
    year: number;
    director: string;
    rating: string;
    edited: string;
    lentTo: string;
    notes: string;
};
