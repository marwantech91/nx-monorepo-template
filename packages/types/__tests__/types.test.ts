import { paginate } from '../index';

describe('paginate', () => {
  it('creates paginated response with correct structure', () => {
    const items = [{ id: 1 }, { id: 2 }];
    const result = paginate(items, 1, 10, 25);

    expect(result.data).toEqual(items);
    expect(result.pagination.page).toBe(1);
    expect(result.pagination.pageSize).toBe(10);
    expect(result.pagination.total).toBe(25);
    expect(result.pagination.totalPages).toBe(3);
  });

  it('calculates totalPages correctly for exact division', () => {
    const result = paginate([], 1, 10, 30);
    expect(result.pagination.totalPages).toBe(3);
  });

  it('rounds up totalPages for partial last page', () => {
    const result = paginate([], 1, 10, 31);
    expect(result.pagination.totalPages).toBe(4);
  });

  it('returns 0 totalPages for empty dataset', () => {
    const result = paginate([], 1, 10, 0);
    expect(result.pagination.totalPages).toBe(0);
  });

  it('handles single item per page', () => {
    const result = paginate(['a'], 3, 1, 5);
    expect(result.pagination.page).toBe(3);
    expect(result.pagination.totalPages).toBe(5);
  });

  it('preserves generic type', () => {
    interface User { name: string }
    const users: User[] = [{ name: 'Alice' }, { name: 'Bob' }];
    const result = paginate(users, 1, 10, 2);
    expect(result.data[0].name).toBe('Alice');
  });
});
