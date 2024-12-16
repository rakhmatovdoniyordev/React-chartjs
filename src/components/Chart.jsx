import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
    const [count, setCount] = useState(0)
    const pergeCount = 5
    const [products, setProducts] = useState(null)
    useEffect(()=>{
        axios
            .get(`https://dummyjson.com/products?limit=${pergeCount}&skip=${pergeCount * count}`)
            .then(res => {
                setProducts(res.data.products)
            })
    }, [count])
    console.log(products);

    const data = {
        labels: products?.map(item => item.title),
        datasets: [
          {
            label: `O'quvchi`,
            data: products?.map(item => item.stock),
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
          },
        ],
      };
  return (
    <div style={{ width: 500, margin: "auto"}}>
        <div>Chart</div>
        {
            products?.length == 0 && <div>
                <h2>Ma'lumot yo'q</h2>
            </div>
        }
        <Pie data={data} />
        <div style={{marginTop: 20}}>
            <button disabled={count < 1} onClick={()=> {setCount(p => p - 1)}} style={{marginRight: 10}}>-</button>
            <button onClick={()=> {setCount(p => p + 1)}} disabled={products?.length === 0}>+</button>
        </div>
    </div>
  )
}

export default Chart