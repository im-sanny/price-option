import axios from "axios";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Bars } from 'react-loader-spinner'
import { useEffect, useState } from "react";


const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] =useState(true);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data =>{
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map(phone =>{
                const obj ={
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            console.log(phonesWithFakeData);
            setPhones(phonesWithFakeData)
            setLoading(false)
        });


    },[])
    return (
        <div>
                {loading && <div className="flex justify-center my-10">
                <Bars
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="bars-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
                    </div>} 

            <h2 className="text-4xl">Phones: {phones.length}</h2>
            <BarChart width={600} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey='name'></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </BarChart>
        </div>
    );
};

export default Phones;