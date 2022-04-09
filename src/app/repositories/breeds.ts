export class BreedRepository {
  async getAll() {
    const url = `${process.env.REACT_APP_API}/breeds/list/all`;
    return await fetch(url);
  };
}
