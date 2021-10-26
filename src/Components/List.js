import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {field: 'id', headerName: 'ID'},
  {field: 'title', headerName: 'Account Name', width: 300},
  {field: 'body', headerName: 'Particulars', width: 600},
  {field: 'Amount', headerName: 'Amount', width: 200},
  {field: 'Date', headerName: 'Date', width: 200}

]

const List = () => {

  const [tableData, setTableData] = useState([])

 useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .then((data) => setTableData(data))
 })

  return (
    <div >
      <DataGrid 
        rows={tableData}
        columns={columns}
        pageSize={12}
        checkboxSelection
        style={{height: 700, width: '100%'}}/>
    </div>
  )
}

export default List




  
