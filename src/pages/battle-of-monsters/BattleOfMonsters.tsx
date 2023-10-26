import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard"
import { MonstersList } from "../../components/monsters-list/MonstersList"
import { Title } from "../../components/title/Title"
import { fetchMonstersData, fetchStartBattle } from "../../reducers/monsters/monsters.actions"
import { selectMonsterWinner, selectMonsters, selectSelectedComputerMonster, selectSelectedMonster } from "../../reducers/monsters/monsters.selectors"
import { BattleSection, Notify, PageContainer, StartBattleButton } from "./BattleOfMonsters.styled"

const BattleOfMonsters = () => {
    const dispatch = useAppDispatch()

    const monsters = useSelector(selectMonsters)
    const selectedMonster = useSelector(selectSelectedMonster)
    const selectedComputerMonster = useSelector(selectSelectedComputerMonster)
    const monsterWinner = useSelector(selectMonsterWinner)
    

    useEffect(() => {
        dispatch(fetchMonstersData())
    }, []);

    const handleStartBattleClick = () => {
        // Fight!
        if(selectedMonster && selectedComputerMonster) {
            const request = {
                monster1Id: selectedMonster.id,
                monster2Id: selectedComputerMonster.id
            }
            dispatch(fetchStartBattle(request))
        }
        
    }

    return (
        <PageContainer>
            <Title>Battle of Monsters</Title>

            <MonstersList monsters={monsters} />
            {monsterWinner && <Notify>{monsterWinner?.name} wins!</Notify>}
            <BattleSection>
                <MonsterBattleCard monster={selectedMonster} title={selectedMonster?.name || "Player"}></MonsterBattleCard>
                <StartBattleButton data-testid="start-battle-button"  disabled={selectedMonster === null} onClick={handleStartBattleClick}>Start Battle</StartBattleButton>
                <MonsterBattleCard monster={selectedComputerMonster} title="Computer"></MonsterBattleCard>
            </BattleSection>
        </PageContainer>
    )
}

export { BattleOfMonsters }

function selectedComputerMonster(state: unknown): unknown {
    throw new Error("Function not implemented.")
}
