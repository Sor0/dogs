import { Favorite } from 'core/types/favorite';

export class BreedRepository {
  readonly FAVORITE_KEY = '__favorite__';

  get baseUrl() {
    return process.env.REACT_APP_API;
  }

  getAll() {
    const url = `${this.baseUrl}/breeds/list/all`;
    return fetch(url);
  }

  getImages(breed: string, subBreed: string) {
    const url = `${this.baseUrl}/breed/${breed}/${subBreed}/images`;
    return fetch(url);
  }

  getFavorite(): Favorite | null {
    const rawString = localStorage.getItem(this.FAVORITE_KEY);
    if (rawString) {
      return JSON.parse(rawString) as Favorite;
    }
    return null;
  }

  saveFavorite(favorite: Favorite) {
    return localStorage.setItem(this.FAVORITE_KEY, JSON.stringify(favorite));
  }

  removeFavorite() {
    localStorage.removeItem(this.FAVORITE_KEY);
  }
}
