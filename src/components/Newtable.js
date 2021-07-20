import React, { useState, useEffect} from 'react';
import { Table, Slider  } from 'antd';
import 'antd/dist/antd.css';

function Newtable() {
  const [cData, setData] = useState();

    const columns = [
  {
    title: 'Player',
    dataIndex: 'Player',
    // filters: [
    //   {
    //     text: 'Joe',
    //     value: 'Joe',
    //   },
    //   {
    //     text: 'Jim',
    //     value: 'Jim',
    //   },
      // {
      //   text: 'Submenu',
      //   value: 'Submenu',
      //   children: [
      //     {
      //       text: 'Green',
      //       value: 'Green',
      //     },
      //     {
      //       text: 'Black',
      //       value: 'Black',
      //     },
      //   ],
      // },
    // ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    //onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.Player.length - b.Player.length,
    // multiple:1,
    sortDirections: ['descend'],
    // defaultSortOrder: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'Age',
    defaultSortOrder: ['descend'],
    sorter: (a, b) => a.Age - b.Age,
  },
  {
    title: 'Country',
    dataIndex: 'Country',
    filters: [
      {
        text: 'USA',
        value: 'USA',
      },
      {
        text: 'England',
        value: 'England',
      },
      {
        text: 'India',
        value: 'India',
      },

    ],
    onFilter: (value, record) => record.Country.indexOf(value) === 0,
  },
  {
    title: 'Position',
    dataIndex: 'Position',
    // defaultSortOrder: 'descend',
    // sorter: (a, b) => a.Position - b.Position,
  },
  {
    title: 'Team',
    dataIndex: 'Team',
    // defaultSortOrder: 'descend',
    // sorter: (a, b) => a.Team - b.Team,
  },
];

//const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 50,
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 60,
//     address: 'London No. 2 Lake Park',
//   },
// ];



const data = [
  {
    Player: "Joe Gomez",
    Age: 19,
    Country: "USA",
    Position: "CB",
    Team: "Liverpool"
  },
  {
    Player: "Mats Hummels",
     Age: 20,
    Country: "USA",
    Position: "GK",
    Team: "Liverpool"
  },
  {
    Player: "Christopher Nkunku",
     Age: 20,
    Country: "England",
    Position: "CB",
    Team: "Liverpool"
  },
  {
    Player: "Dries Mertens",
     Age: 21,
    Country: "England",
    Position: "CB",
    Team: "Liverpool"
  },
  {
    Player: "Jadon Sancho",
     Age: 22,
    Country: "England",
    Position: "CF",
    Team: "Liverpool"
  },
  {
    Player: "Thomas Partey",
     Age: 23,
    Country: "India",
    Position: "CF",
    Team: "Bayern"
  },
  {
    Player: "Luis Muriel",
     Age: 27,
    Country: "England",
    Position: "CF",
    Team: "Bayern"
  },
  {
    Player: "Serge Gnabry",
     Age: 28,
    Country: "India",
    Position: "GK",
    Team: "Bayern"
  }
]

useEffect(() => {
  setData(data);
}, [])

function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

function onChangeAge(value) {
  // let tableData = cData.filter(data=> data.age >= value);
  // setData(tableData)
  let newAge = [''];
  for (let i = 0; i < data.length; i++) {
      if (data[i].Age > value) {
          newAge.push(data[i]);
      }
  }
setData(newAge)
  console.log('onChange: ',newAge , data, value);
}
    return (
        <div className="mt-8">
          <div className="">
          
              <Slider defaultValue={0} onChange={onChangeAge} />
          </div>
          
          <Table columns={columns} dataSource={cData} onChange={onChange} pagination= {false} />
        </div>
    )
}

export default Newtable