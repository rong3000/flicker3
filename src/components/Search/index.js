import {Outlet} from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'

import {useState} from 'react'

const SearchPage = () => {
    const [inputValue, setInputValue] = useState('')
    const { queryText } = useParams()
    const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        navigate(`/search/${inputValue}`)
        console.log(inputValue)
    }
    return (
        <>

            <form onSubmit={(e) => submit(e)}>
                <input 
                onChange={(e) => setInputValue(e.target.value)}
                className='border-2 rounded-sm mr-5' 
                type='text'
                value={inputValue || queryText}
                 />
                <button className="">Submit</button>
            </form>
            <Outlet />
        </>
    )

}

export default SearchPage