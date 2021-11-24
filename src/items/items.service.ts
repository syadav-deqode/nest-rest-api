import { Injectable } from '@nestjs/common';

import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      name: "Item 1",
      description: "Description 1",
      qty: 100
    },
    {
      name: "Item 2",
      description: "Description 2",
      qty: 10
    },
  ]

  findAll(): Item[] {
    return this.items
  }
}
