import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
const API_KEY = process.env.REACT_APP_API_KEY

const SearchResult = () => {
    const { queryText } = useParams()
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch(`${API_KEY}`).then((res)=>res.json()).then((data)=>setPhotos(data.photos.photo))
        .catch((error)=>console.log(error))
    }, [queryText])
    return (
        <>

            {
                photos? (photos.map(photo => 
                <img 
                    key={photo.id}
                    src={`....${photo.server}/${photo.id}_${photo.secret}_w.jpg`}
                    alt={photo.id}
                /> ))
            }
        </>
    )

}

export default SearchResult