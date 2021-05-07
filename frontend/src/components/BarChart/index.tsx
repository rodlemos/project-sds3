import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';

type seriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {categories: string[]};
    series: seriesData[];
}

export default function BarChart() {
    const [chartData, setChartData]= useState<ChartData>(
        {
            labels: {categories:[]}, 
            series: [{name: "", data:[]}]
        }   
    );

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`).then(res=> {
            const data = res.data as SaleSuccess[];
            const myLabels = data.map(label=> label.sellerName);
            const MySeries = data.map(serie => 
                round((serie.deals / serie.visited * 100), 1));
    
            setChartData(
                {
                    labels: {categories: myLabels}, 
                    series: [{name: "% de sucesso", data: MySeries}]
                }
            );
        });    
    }, [])

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    return (
        <Chart 
            options={{...options, xaxis: chartData.labels}}
            series={chartData.series}
            type="bar"
            height="240"
        />
    )
}
