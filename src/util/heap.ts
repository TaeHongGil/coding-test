abstract class Heap {
  heap: number[];

  constructor(array: number[]) {
    this.heap = [];
    array.forEach((value) => this.push(value));
  }

  size() {
    return this.heap.length;
  }

  leftIndex(index: number): number {
    return 2 * index + 1;
  }

  rightIndex(index: number): number {
    return 2 * index + 2;
  }

  parentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  swap(index1: number, index2: number) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  push(value: number): void {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop(): number | undefined {
    if (this.size() === 0) return undefined;
    this.swap(0, this.size() - 1);
    const result = this.heap.pop();
    this.bubbleDown(0);
    return result;
  }

  protected abstract bubbleUp(): void;
  protected abstract bubbleDown(index: number): void;
}

export class MinHeap extends Heap {
  constructor(array: number[]) {
    super(array);
  }

  protected bubbleUp(): void {
    let index = this.size() - 1;
    while (index > 0) {
      const parent = this.parentIndex(index);
      if (this.heap[parent] <= this.heap[index]) break;
      this.swap(index, parent);
      index = parent;
    }
  }

  protected bubbleDown(index: number = 0): void {
    const length = this.size();
    let smallest = index;

    while (true) {
      const left = this.leftIndex(index);
      const right = this.rightIndex(index);

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;
      this.swap(index, smallest);
      index = smallest;
    }
  }
}

export class MaxHeap extends Heap {
  constructor(array: number[]) {
    super(array);
  }

  protected bubbleUp(): void {
    let index = this.size() - 1;
    while (index > 0) {
      const parent = this.parentIndex(index);
      if (this.heap[parent] >= this.heap[index]) break;
      this.swap(index, parent);
      index = parent;
    }
  }

  protected bubbleDown(index: number = 0): void {
    const length = this.size();
    let largest = index;

    while (true) {
      const left = this.leftIndex(index);
      const right = this.rightIndex(index);

      if (left < length && this.heap[left] > this.heap[largest]) {
        largest = left;
      }

      if (right < length && this.heap[right] > this.heap[largest]) {
        largest = right;
      }

      if (largest === index) break;
      this.swap(index, largest);
      index = largest;
    }
  }
}
