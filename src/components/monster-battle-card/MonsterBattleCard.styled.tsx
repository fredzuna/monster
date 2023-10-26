import styled from "@emotion/styled"
import { Card, LinearProgress, linearProgressClasses, Typography } from "@mui/material"
import { colors } from "../../constants/colors"

export const BattleMonsterCard = styled(Card, { shouldForwardProp: (prop) => prop !== "centralized" })<{ centralized?: boolean; }>(({ centralized }) => ({
    padding: '13px 11px',
    width: 'calc(307px - 22px)',
    height: '415px',
    background: colors.white,
    boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '7px',
    display: centralized ? 'flex' : 'auto',
    alignItems: centralized ? 'center' : 'auto',
    justifyContent: centralized ? 'center' : 'auto',
    paddingBottom: '28px'
}))
  
export const BattleMonsterTitle = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '36px',
    lineHeight: '42px',
    color: colors.black,
}))

export const ProgressBar = styled(LinearProgress)(() => ({
    height: 8,
    borderRadius: 15,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: colors.progressBarBackground,
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 15,
        backgroundColor: colors.progressColor,
    },
}));


export const NameDescription = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: '12px',
    fontWeight: '400',

    margin: '8px 0px',
}))

export const Image = styled.img(() => ({
    borderRadius: '7px',
    width: '283px',
    height: '178px',
    marginBottom: '4px'
}))

export const MonsterName = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: '22px',
    fontWeight: '400',
    lineHeight: '25.78px',
    margin: '8px 0px'
}))
