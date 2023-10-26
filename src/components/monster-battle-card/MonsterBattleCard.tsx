import { Divider } from "@mui/material"
import { Monster } from "../../models/interfaces/monster.interface"
import { BattleMonsterCard, BattleMonsterTitle, Image, MonsterName } from "./MonsterBattleCard.styled"
import { MonsterCardStatsItem } from "./MonsterCardStatsItem"

type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
    return (
        <>
            {monster ?
                <BattleMonsterCard >
                    <Image src={monster.imageUrl} />
                    <MonsterName>{monster.name}</MonsterName>
                    <Divider />
                    <MonsterCardStatsItem name={'HP'} value={monster.hp} />
                    <MonsterCardStatsItem name={'attack'} value={monster.attack} />
                    <MonsterCardStatsItem name={'defense'} value={monster.defense} />
                    <MonsterCardStatsItem name={'speed'} value={monster.speed} />
                </BattleMonsterCard>
                :
                <BattleMonsterCard>
                    <BattleMonsterTitle>{title!}</BattleMonsterTitle>
                </BattleMonsterCard>
            }
        </>

    )
}

export { MonsterBattleCard }