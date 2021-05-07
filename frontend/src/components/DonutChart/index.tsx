import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}

export default function DonutChart() {
    const [chartData, setChartData] = useState<ChartData>(
        {labels: [], series: []});

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`).then(res=> {
            const data = res.data as SaleSum[];
            const myLabels = data.map(label=> label.sellerName);
            const MySeries = data.map(serie => serie.sum);
    
            setChartData({labels: myLabels, series: MySeries});
        });    
    }, [])
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{...options, labels: chartData.labels}}
            series={chartData.series}
            type="donut"
            height="240"
        />
    )
}
