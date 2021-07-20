import React from 'react'
import { useState  } from 'react'
import { Checkbox, Collapse} from 'antd'


const {Panel} = Collapse
const country = [
    {
        "id":1,
        "name":"india"
    },
    {
        "id":2,
        "name":"England"
    },
    {
        "id":3,
        "name":"USA"
    }
]

function Checkboxxx(props) {

   const [checkedd, setCheckedd] = useState([])

    const handleToggle = (value) => {

        const currentIndex = checkedd.indexOf(value); 
        const newChecked = [...checkedd];

        if(currentIndex === -1)
        {
            newChecked.push(value)
        }
        else{
            newChecked.splice(currentIndex, 1)
        }
        setCheckedd(newChecked)
        props.handleFilter(newChecked)


    }
    
    const renderCheckLists = () =>country.map((value, index) => (
        <React.Fragment key={index}>
            <Checkbox 
                        onChange={()=> handleToggle(value.id)}
                        type = "Checkbox"
                        checked
                        />
                        <span>{value.name}</span>

        </React.Fragment>
    ))
    return (
        <>
        <Collapse defaultActiveKey ={['0']}>
            <Panel header key="1">
                {renderCheckLists()}

            </Panel>
        </Collapse>

            
        </>
    )
}

export default Checkboxxx
