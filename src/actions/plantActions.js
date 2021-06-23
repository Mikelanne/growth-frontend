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