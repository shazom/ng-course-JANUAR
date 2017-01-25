import {StorageService} from "../utils/storage.service";
import {Injectable} from "@angular/core";

export interface Item {
  title: string;
  done: boolean;
  created: Date;
}

@Injectable()
export class Todolist {

  private _items: Item[];
  private storage: StorageService;
  private _KEY: string;

  constructor(storage: StorageService, key: string) {
    this.storage = storage;
    this._KEY    = key;
    this._items  = storage.get(this._KEY) || [];
  }

  get items(): Item[] {
    return this._items;
  }

  public addItem(title: string): void {
    const item  = {title: title, done: false, created: new Date()};
    this._items = [...this._items, item];
    this.storage.save(this._KEY, this._items);
  }

  public removeItem(item: Item) {
    const index = this._items.indexOf(item);
    this._items.splice(index, 1);
  }

  public removeDone() {
    this._items = this._items.filter(item => item.done === false);
  };

  public toggle(flag: boolean) {
    console.log(flag);
    console.log('to be implemented');
  }

}
