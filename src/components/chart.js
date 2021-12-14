import React,{ useState} from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { Table, TableBody, TableHead ,TableRow, TableCell} from '@material-ui/core';
import './chart.css'

const ChartComponent = () => {


    let firstValue = [
        {name: "Rubi",age: 31,gender: "F"},
        {name: "Randy",age: 32,gender: "M"},
        {name: "Apple",age: 18,gender: "F"},
        {name: "Mango",age: 14,gender: "F"},
        {name: "Ferry",age: 37,gender: "M"},
        {name: "Johnson",age: 55,gender: "M"},
        {name: "Larry",age: 45,gender: "M"},
        {name: "Ryne",age: 12,gender: "F"},
        {name: "Christopher",age: 24,gender: "M"}
    ]
    const [initialData, setInitialData] = useState(firstValue)
    // initialData[initialData.length] = { name: "new",age: 2,gender: "M"}
    console.log(initialData)
    let youngAdult = 0;
    let adult = 0;
    let seniors = 0;
    let numberOfMale =0;
    let numberOfFemale = 0;


    initialData?.map((data,index) => {
        return(
            data.age <= 35 ? youngAdult++ : data.age >= 36 && data.age<=50 ? adult++ : seniors++,
            data.gender === "M" ? numberOfMale++ : numberOfFemale++
    )
    })


    const dataForBarChart = {
        chartData: {
                labels: ['young adult','adult','seniors'],
                datasets: [
                    {
                        label: 'number of people according to AGE',
                        data: [
                            youngAdult,adult,seniors
                        ],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.4)',
                            'rgba(153, 102, 255, 0.4)',
                            'rgba(255, 159, 64, 0.4)',
                        ]
                    }
                ]
        }
    }


    const dataForPieChart = {
        chartData: {
            labels: ['Male','Female'],
            datasets: [
                {
                    label: 'Ratio of M and F',
                    data: [
                        numberOfMale,numberOfFemale
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ]
                }
            ]
        }
    }
    const [ inputname, setInputName ] = useState('')
    const [ inputage, setInputAge ] = useState('')
    const [ inputgender, setInputGender ] = useState('')
    const nameOnchange = (e) => {
        setInputName(e.target.value.trim())
    }
    const ageOnchange = (e) => {
        setInputAge(e.target.value.trim())
    }
    const genderOnChange = (e) => {
        setInputGender(e.target.value.trim())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputname && inputage && inputgender){
            console.log('hi')
            firstValue[firstValue.length] = {name: inputname, age: inputage, gender: inputgender}
            console.log(firstValue)
        }
        setInitialData(firstValue)
        console.log(initialData)
        setInputName('')
        setInputAge('')
        setInputGender('')
    }

    return(
        <>
        <div className="chartPage-container" style={{display: "flex",flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
        <Table aria-label="simple table" style={{marginTop: "1em",marginBottom: "2em",width: "500px",height: "500px"}}>
            <TableHead>
                <TableRow>
                    {["ID","Name","Age","Gender"].map((title,index) => (
                        <TableCell key={index}>
                            {title}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                    {initialData?.map((data,index) => {
                        return(
                            <TableRow key={index}>
                                <TableCell>
                                    {index}
                                </TableCell>
                                <TableCell>
                                    {data.name}
                                </TableCell>
                                <TableCell>
                                    {data.age}
                                </TableCell>
                                <TableCell>
                                    {data.gender}
                                </TableCell>
                            </TableRow>
                        )
                    })}
            </TableBody>
        </Table>
        <form onSubmit={handleSubmit} className="form-container">
            <label id="name">Enter Name</label>
                <input className="nameInput" onChange={nameOnchange} type="text" value={inputname}></input>
            <label id="age">Enter Age</label>
                <input className="ageInput" onChange={ageOnchange} type="number" value={inputage}></input>
            <label id="gender">Enter Gender</label>
                <input className="genderInput" onChange={genderOnChange} placeholder="M/F" type="text" value={inputgender}></input>
            <button type="submit">Add New Data</button>
        </form>
        <div className="chart" style={{height: "500px",width: "60vw",display: "flex",flexDirection:"column",alignItems: "center", padding: "0px 50px"}}>
            <Bar data={dataForBarChart.chartData}/>
            <Pie data={dataForPieChart.chartData}/>
        </div>
        </div>

        </>
    )

}
export default ChartComponent;
            // {/* <Pie data={data}
            //     options={{
            //         title:{
            //             display: true,
            //             text: 'Largest City',
            //             fontSize: 25,
            //         },
            //         legend:{
            //             display: true,
            //             position: 'right',
            //         }
            //     }}
                // /> */}
                // const initialChart = {
                //     chartData: {
                //         labels: ['1','2','3','4','5','6'],
                //         datasets:[
                //             {
                //                 label:'Population',
                //                 data:[
                //                     101,
                //                     102,
                //                     10,
                //                     104,
                //                     105,
                //                     106,
                //                 ],
                //                 backgroundColor:[
                //                     'rgba(255, 99, 132, 0.2)',
                //                     'rgba(54, 162, 235, 0.2)',
                //                     'rgba(255, 206, 86, 0.2)',
                //                     'rgba(75, 192, 192, 0.2)',
                //                     'rgba(153, 102, 255, 0.2)',
                //                     'rgba(255, 159, 64, 0.2)',
                //                 ]
                //             }
                //         ],
            
                //     }
                // }
                // const [data,setData ] = useState(initialChart.chartData)