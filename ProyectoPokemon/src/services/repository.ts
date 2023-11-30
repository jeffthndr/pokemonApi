export interface Repository<T extends { id: number }> {
  get(_id: T['id']): Promise<T>;
  getAll(_url: string): Promise<T[]>;
  create(_item: Omit<T, 'id'>): Promise<T>;
  update(_name: T['id'], _item: Partial<T>): Promise<T>;
  delete(_name: T['id']): Promise<void>;
}
