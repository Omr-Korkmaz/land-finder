import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'History',
    mark: 100,
    average: 80,

  },
  {
    name: 'IT',
    mark: 60,
    average: 70,
 
  },
  {
    name: 'Mathematics',
    mark: 70,
    average: 50,

  },
  {
    name: 'Sport',
    mark: 90,
    average: 80,
 
  },
  {
    name: 'Language',
    mark: 70,
    average: 40,

  },

];

export default function chart() {


    return (
    
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="mark" fill="#8884d8" />
          <Bar dataKey="average" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
 
    );
  
}
