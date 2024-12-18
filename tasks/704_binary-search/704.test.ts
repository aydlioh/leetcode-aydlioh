import { describe, it, expect } from 'vitest';
import { search } from './704';

describe('binarySearch - функция для поиска элемента в отсортированном массиве', () => {
  it('возвращает индекс для существующего элемента', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  it('возвращает -1 для несуществующего элемента', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });

  it('возвращает индекс для элемента в начале массива', () => {
    expect(search([-1, 0, 3, 5, 9, 12], -1)).toBe(0);
  });

  it('возвращает индекс для элемента в конце массива', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 12)).toBe(5);
  });

  it('возвращает -1 для пустого массива', () => {
    expect(search([], 0)).toBe(-1);
  });

  it('возвращает 0 для массива с одним элементом', () => {
    expect(search([5], 5)).toBe(0);
  });
});
