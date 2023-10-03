import ReactApexChart from "react-apexcharts";
import SelectMenu from "./ui/SelectMenu";

const Revenue = () => {

    const series = [
        {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }
    ]

    const options = {
        chart: {
            width: 500,
            height: 350,
            type: 'area'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:00:30.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z" ]
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        },
        colors: ['#84cc16', '#fbbf24']
    }

    return (
        <div className="w-full bg-white rounded-md shadow-md p-">
            <div className="flex  justify-between p-6 gap-y-6">
                <div className="">
                    <h1 className="text-slate-800 text-2xl font-semibold border-l-8 pl-2 border-lime-600">Revenue</h1>
                    <p className="text-slate-600 text-md">Lorem, ipsum dolor.</p>
                </div>
                <SelectMenu />
            </div>
            <div className="p-10">
                <p className="text-slate-600 text-lg">Income</p>
                <h1 className="text-slate-800 text-2xl font-bold">$552,700</h1>
            </div>
            <div className="w-full h">
                <ReactApexChart options={options} series={series} type="area" width={"100%"} height={400} />
            </div>
        </div> 
    )
}

export default Revenue;