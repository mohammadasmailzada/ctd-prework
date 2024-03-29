
import {  useEffect, useState } from "react";
import { Search } from "./Search";
import { Breed } from "./Breed";

export function Dogs() {
    const [searchedBreed, setSearchedBreed] = useState(['Affenpinscher', 0])
    const [data, setData] = useState([]);
    useEffect(() => {
        if(!data.length) {
            fetch('https://api.thedogapi.com/v1/breeds')
                .then(res => res.json())
                .then(res => setData(res))
                .catch(err => console.log(err))
        }
    }, [])


    return (
        <div>
            <h1>Select to know about the dog you want to know about</h1>
            <div className="collection">
                <Search breeds={data} setSearchedBreed={setSearchedBreed} />
                <Breed breeds={data} searchedBreed={searchedBreed} />
            </div>
        </div>
    )
}
