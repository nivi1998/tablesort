import React from 'react'
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
// import { useState } from 'react';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Slider from '@material-ui/core/Slider';
// import VolumeUp from '@material-ui/icons/VolumeUp';
// import VolumeDown from '@material-ui/icons/VolumeDown';



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


function Table1() {

    // const [age, setAge] = useState("");
    // const changeAge = (event, newAge) => {
    //     setAge(newAge);
    //   };


    const columns =[
        {
            headername:"Player", 
            field:"Player",
            sortable:true
        },

        {
            headername:"Age",
            field:"Age",
            setAge:true
        },
        {
            headername:"Country",
            field:"Country"
        },
        {
            headername:"Position",
            field:"Position"
        },
        {
            headername:"Team",
            field:"Team"
        }
        

    ]

    const defaultColDeef = {
        flex:1

    }

    return (
        <>
        <div className="ag-theme-alpine" 
        style={{ height: 500,
             width: '100%',
             margin: 'auto',
            display: 'block',
            
     }}
        >

{/* <h3>How to use Slider Component in ReactJS?</h3>
      <Typography id="continuous-slider" gutterBottom>
        Age
      </Typography>
      <Grid container spacing={4}>
        
        <Grid item xs>
          <Slider value={age} 
          onChange={changeAge}
        />
        </Grid>
        
      </Grid>
 */}

         
           <AgGridReact rowData={data}
            columnDefs={columns}
            defaultColDef={defaultColDeef}
             />
           </div>
        </>

    )
}

export default Table1
