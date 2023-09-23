import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


const Chart = ({ durationCost, invitationCost }) => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ['Duration Cost', 'Invitation Cost'],
        datasets: [
            {
                label: 'cost ₹',
                data: [durationCost, invitationCost],
                backgroundColor: [
                    '#76c9c1',
                    '#f6ad55',
                ],
                borderColor: [
                    '#76c9c1',
                    '#f6ad55',
                ],
                borderWidth: 1,

            },
        ],
    };


    const options = {
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
            },
        },
        maintainAspectRatio: false,

    };




    return (
        <div className='w-[300px] h-[300px] flex justify-center items-center'>
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default Chart