import { API_URL } from '../../constants/env';
import { Monster, RequestBody, ResponseBody } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const startBattle = async (body: RequestBody): Promise<ResponseBody> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());  

export const MonsterService = {
  getAll,
  startBattle
};
