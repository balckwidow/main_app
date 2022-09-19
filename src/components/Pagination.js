import {useEffect,useState} from 'react'

const Pagination = ({url,query}) => {
  const [data, setData] = useState({
    data: [],
    page: 0,
    nextPage: 0,
    previousPage: 0,
    limit: 0,
    total:0
  })
  useEffect(() => {
  
})
  return data
}

export default Pagination