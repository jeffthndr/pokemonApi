/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pokemon } from '../model/pokemon';
import { Repository } from './repository';

export class ApiPokemonRepository implements Repository<Pokemon> {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }
  async getAll(url: string): Promise<Pokemon[]> {
    const response = await fetch(url);
    const data: any[] = await response.json();
    return data;
  }
  async get(id: number): Promise<Pokemon> {
    const url = this.urlBase + '/' + id;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  async create(item: Omit<Pokemon, 'id'>): Promise<Pokemon> {
    const response = await fetch(this.urlBase, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
  async update(id: number, item: Partial<Pokemon>): Promise<Pokemon> {
    const url = this.urlBase + '/' + id;
    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data;
  }
  async delete(id: number): Promise<void> {
    const url = this.urlBase + '/' + id;
    await fetch(url, {
      method: 'DELETE',
    });
  }
}
