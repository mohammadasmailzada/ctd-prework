import { useEffect, useState } from "react"

export function Breed({ breeds, searchedBreed }) {
    const [images, setImages] = useState([]);
    useEffect(() => {
        if(!images.length) {
            fetch(`https://api.thedogapi.com/v1/images/search?limit=2&breed_ids=${breeds.length ? searchedBreed[1] : 1}&api_key=live_ZZjOwLlDJ1wUKeF354eNjTfbLX3DDwv6AczbH9s3Q90gVZ0wfe2FFD5ANfH0sGGk`)
                .then(res => res.json())
                .then(res => setImages(res))
        }
    }, searchedBreed)
    
    return (
        <div id="breed-collection">
            <div id="breed-info">
                <h2>{breeds.length !== 0 && searchedBreed[0]}</h2>
                { breeds.length !== 0 && breeds[searchedBreed[1]].temperament }
            </div>
            <div id="breed-images">
                { images.length !== 0 && images.map((imgObj, index) => <img key={`img${index}`} className="breedImage" src={imgObj.url} alt='a dog' />) }
            </div>
        </div>
    )
} 