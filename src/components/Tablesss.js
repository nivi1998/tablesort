import React, {useState, useEffect} from 'react'
import Agefilter from './Agefilter';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';




import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkboxxx from './Checkboxxx';


const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950
    },
    tableHeaderCell: {
        fontHeight: "bold",
        backgroundColor: theme.palette.primary.dark,
        color:theme.palette.getContrastText(theme.palette.primary.dark)
    },


    root: {
      width: 200,
    },
    margin: {
        marginTop:20,
      height: theme.spacing(3),
    },
  }));



  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~name sort~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``

  // const columns = [
  //   {
  //     title: 'Player',
  //     dataIndex: 'name',
  //     filters: [
  //       {
  //         text: 'Joe Gomez',
  //         value: 'Joe Gomez',
  //       },
  //       {
  //         text: 'Mats Hummels',
  //         value: 'Mats Hummels',
  //       },
  //       {
  //         text: 'Christopher Nkunku',
  //         value: 'Christopher Nkunku',
  //       },
  //       {
  //         text: 'Dries Mertens',
  //         value: 'Dries Mertens',
  //       },
  //       {
  //         text: 'Jadon Sancho',
  //         value: 'Jadon Sancho',
  //       },
  //       {
  //         text: 'Thomas Partey',
  //         value: 'Thomas Partey',
  //       },
  //       {
  //         text: 'Luis Muriel',
  //         value: 'Luis Muriel',
  //       },
  //       {
  //         text: 'Serge Gnabry',
  //         value: 'Serge Gnabry',
  //       },
    
        
  //     ],
  //     // specify the condition of filtering result
  //     // here is that finding the name started with `value`
  //     onFilter: (value, record) => record.name.indexOf(value) === 0,
  //     sorter: (a, b) => a.name.length - b.name.length,
  //     sortDirections: ['descend'],
  //   }
  // ];
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~name sort~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``

  
  const data = [
    {
      "Player": "Joe Gomez",
      "Age": 19,
      "Country": "USA",
      "Position": "CB",
      "Team": "Liverpool"
    },
    {
      "Player": "Mats Hummels",
      "Age": 20,
      "Country": "USA",
      "Position": "GK",
      "Team": "Liverpool"
    },
    {
      "Player": "Christopher Nkunku",
      "Age": 20,
      "Country": "England",
      "Position": "CB",
      "Team": "Liverpool"
    },
    {
      "Player": "Dries Mertens",
      "Age": 21,
      "Country": "England",
      "Position": "CB",
      "Team": "Liverpool"
    },
    {
      "Player": "Jadon Sancho",
      "Age": 22,
      "Country": "England",
      "Position": "CF",
      "Team": "Liverpool"
    },
    {
      "Player": "Thomas Partey",
      "Age": 23,
      "Country": "India",
      "Position": "CF",
      "Team": "Bayern"
    },
    {
      "Player": "Luis Muriel",
      "Age": 27,
      "Country": "England",
      "Position": "CF",
      "Team": "Bayern"
    },
    {
      "Player": "Serge Gnabry",
      "Age": 28,
      "Country": "India",
      "Position": "GK",
      "Team": "Bayern"
    }
  ]


 



  

  

  
export default function Tablesss() {

  const [cData, setData] = useState();

  useEffect(() => {
    setData(data);
  }, [])

  function onChangeAge(value) {
    // let tableData = cData.filter(data=> data.age >= value);
    // setData(tableData)
    let newAge = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].age > value) {
            newAge.push(data[i]);
        }
    }

    setData(newAge)
  // console.log('onChange: ',newAge , data, value);
}


  const classes = useStyles();


  const handleFilter = (filter, category) => {

  }
    // const classes = useStyles();


    const marks = [
      {
        value: 0,
        label: '0',
      },
  
      {
        value: 45,
        label: '45',
      },
    ];
    
    function valuetext(value) {
      return `${value}`;
    }
  
 

    
    
    return (
        <>
    


        <Checkboxxx 
        handleFilter = {filter => handleFilter(filter, "country")}
        />
        
        {/* <Agefilter  /> */}
{/* ///////////////////////// */}

<div className={classes.root}>
      <Typography id="discrete-slider-custom" gutterBottom>
        Age
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="on"
        marks={marks}
        
      />
    </div>

{/* 
        <Table columns={columns} dataSource={data} onChange={onChange} /> */}

        <TableContainer component={Paper} className= {classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className = {classes.tableHeaderCell}>Player</TableCell>
            <TableCell className = {classes.tableHeaderCell} align="right">Age</TableCell>
            <TableCell className = {classes.tableHeaderCell} align="right">Country</TableCell>
            <TableCell className = {classes.tableHeaderCell} align="right">Position</TableCell>
            <TableCell className = {classes.tableHeaderCell} align="right">Team</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data.data}>
              <TableCell component="th" scope="data">
                {data.Player}
              </TableCell>
              <TableCell align="right" onChange={onChangeAge}>{data.Age}</TableCell>
              <TableCell align="right">{data.Country}</TableCell>
              <TableCell align="right">{data.Position}</TableCell>
              <TableCell align="right">{data.Team}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    


       
        </>
    )
    }