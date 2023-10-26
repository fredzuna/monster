import { NameDescription, ProgressBar } from "./MonsterBattleCard.styled"

interface Props {
    name: string,
    value: number
}

export function MonsterCardStatsItem({ name, value }: Props){
   return (
    <>
            <NameDescription>{name}</NameDescription>
            <ProgressBar value={value}  variant="determinate"/>
        </>
   )
}   