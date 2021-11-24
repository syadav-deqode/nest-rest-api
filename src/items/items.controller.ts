import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { CreateItemDto } from './dto/create-items.dto-dto'

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return `Get all route...`
  }
  @Get(':id')
  findOne(@Param('id') id): string {
    return `Sing item id : ${id}`
  }
  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Create item Name: ${createItemDto.name}`
  }
  @Put(':id')
  update(@Param('id') id, @Body() updateItemDto: CreateItemDto): string {
    return `Update item id ${id} and ${JSON.stringify(updateItemDto)}`
  }
  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete id : ${id}`
  }
}
