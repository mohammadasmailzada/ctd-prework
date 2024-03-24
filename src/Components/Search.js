import { useState } from "react";

export function Search({ breeds, setSearchedBreed }) {
    const [result, setResult] = useState('Affenpinscher');
    const searchHander = (e, breedObj, setSearchedBreed, setResult) => {
        e.preventDefault()
        setSearchedBreed([breedObj.name, breedObj.id])
        setResult(breedObj.name)
    }

    return (
        <div id="search">
            <ul id="search-results">
                { breeds.length !== 0 && breeds.map(breedObj => <li key={breedObj.name} className="breedName" onClick={(e) => searchHander(e, breedObj, setSearchedBreed, setResult)}>{breedObj.name}</li>) }
            </ul> 
        </div>
    )
}