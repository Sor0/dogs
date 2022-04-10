import { Breed } from "core/entities/breed";
import { Favorite } from "./favorite";

export interface BreedState {
    items: Breed[];
    isLoading: boolean;
    selected?: Breed;
    favorite?: Favorite;
    loadingSubBreeds: boolean;
    subBreedImages: {[key: string]: string[]}
}

export interface AppState {
    breeds: BreedState;
}
