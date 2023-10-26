export interface Monster {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
}

export interface RequestBody {
  monster1Id: string,
  monster2Id: string
}

export interface ResponseBody {
  winner: Monster, 
  tie: boolean
}
