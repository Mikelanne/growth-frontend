const url = "http://localhost:3001/plants"

export const getPlants = (plants) => ({type: "GOT_PLANTS", payload: plants})

export const fetchPlants = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(plants => {
            dispatch(getPlants(plants))
        })
    }
}

export const createPlant = (plant) => {
    return (dispatch) => {
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(plant)
        }

        // debugger;

        fetch(url, configObj)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
        })
    }
}