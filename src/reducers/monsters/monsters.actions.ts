import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Monster, RequestBody, ResponseBody } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';

export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setSelectedComputerMonster = createAction<Monster | null>(
  'monsters/setSelectedComputerMonster',
);


export const fetchStartBattle = createAsyncThunk<ResponseBody, RequestBody>(
  'monsters/fetchStartBattle',
  MonsterService.startBattle,
);
