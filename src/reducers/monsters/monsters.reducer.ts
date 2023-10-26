import { createReducer } from '@reduxjs/toolkit';
import { Monster } from '../../models/interfaces/monster.interface';
import { fetchMonstersData, setSelectedComputerMonster, setSelectedMonster, fetchStartBattle } from './monsters.actions';

interface MonsterState {
  monsters: Monster[];
  selectedMonster: Monster | null;
  selectedComputerMonster: Monster | null;
  monsterWinner: Monster | null;
}

const initialState: MonsterState = {
  monsters: [],
  selectedMonster: null,
  selectedComputerMonster: null,
  monsterWinner: null,
};

export const monstersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchMonstersData.pending, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.rejected, (state) => ({
    ...state,
    monsters: [],
  }));

  builder.addCase(fetchMonstersData.fulfilled, (state, action) => ({
    ...state,
    monsters: action.payload,
  }));


  builder.addCase(fetchStartBattle.pending, (state) => ({
    ...state,
    monsterWinner: null,
  }));

  builder.addCase(fetchStartBattle.rejected, (state) => ({
    ...state,
    monsterWinner: null,
  }));

  builder.addCase(fetchStartBattle.fulfilled, (state, action) => {
    return {
      ...state,
      monsterWinner: action.payload.winner,
    }
  });


  builder.addCase(setSelectedMonster, (state, action) => ({
    ...state,
    selectedMonster: action.payload,
  }));

  builder.addCase(setSelectedComputerMonster, (state, action) => {
    const { monsters } = state;
    const monsterSelected = action.payload;
    const monsterAvailable = monsters.filter(item => item.id !== monsterSelected?.id)
    const monsterComputer = monsterAvailable[Math.floor(Math.random()*monsterAvailable.length)];

    return {
      ...state,
      selectedComputerMonster: monsterComputer,
    }
  });
});
