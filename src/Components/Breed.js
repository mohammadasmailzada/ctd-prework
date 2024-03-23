import { useAsync } from "../CustomHooks/hooks"

export function Breed({ breeds, searchedBreed }) {
    const [images] = useAsync(`https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=${breeds.length ? breeds[searchedBreed[1]].id : 'abys'}&api_key=live_ZZjOwLlDJ1wUKeF354eNjTfbLX3DDwv6AczbH9s3Q90gVZ0wfe2FFD5ANfH0sGGk`, true, searchedBreed)
    
    return (
        <div id="breed-collection">
            <div id="breed-info">
                <h2>{breeds.length !== 0 && breeds[searchedBreed[1]].name}</h2>
                { breeds.length !== 0 && breeds[searchedBreed[1]].description }
            </div>
            <div id="breed-images">
                { images.length !== 0 && images.map((imgObj, index) => <img key={`img${index}`} className="breedImage" src={imgObj.url} alt={`Image of a ${searchedBreed[0]}`} />) }
            </div>
        </div>
    )
} 