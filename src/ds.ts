class MyHashSet {
    public hs = new Set<number>();
    constructor() {

    }

    add(key: number): void {
        this.hs.add(key);
    }

    remove(key: number): void {
        this.hs.delete(key);
    }

    contains(key: number): boolean {
        return this.hs.has(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

class MyHashMap {
    private hm = new Map();
    constructor() {

    }

    put(key: number, value: number): void {
        this.hm.set(key, value);
    }

    get(key: number): number {
        if (this.hm.has(key)) {
            return this.hm.get(key);
        } else {
            return -1;
        }

    }

    remove(key: number): void {
        this.hm.delete(key);
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */