import React from 'react'
import { useSelector } from 'react-redux'
import { addSpacesToNumber } from '../../../../../utils/sankeyData/sankeyCalucaltors'

const FraisRoboAdviser = () => {
    const { fraisRoboAdvisorX, fraisRobotAdvisorPourcentage } = useSelector(state => state.tarifs)
    return (
        <div>
            <p className=' text-grayLight font-light text-lg mb-4'>Frais Robo adviser X  {(fraisRobotAdvisorPourcentage * 100).toFixed(2)} %</p>
            <h4 className=' text-mainLight  text-xl'>{addSpacesToNumber(fraisRoboAdvisorX)} MAD / mois</h4>

        </div>
    )
}

export default FraisRoboAdviser