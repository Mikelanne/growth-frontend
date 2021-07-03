import Table from "react-bootstrap/table"

const EasyPlants = () => {
    return(
        <div className="table">
            <h4>Low Maintenance Plants</h4>
           <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Plant Name</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Asparagus Fern</td>
                        <td>Asparagus Ferns can adapt to any light it's given. All you need to do is keep the soil moist.</td>
                    </tr>
                    <tr>
                        <td>Air Plant</td>
                        <td>Air plants don't require any dirt or soil, all they require is being dunked in water for a few hours every week and a half.</td>
                    </tr>
                    <tr>
                        <td>Calathea</td>
                        <td>Avoid bright light and keep your Calathea plant moist.</td>
                    </tr>
                    <tr>
                        <td>Rubber Plant</td>
                        <td>Give this plant a little shade and water it every week or so and it will thrive.</td>
                    </tr>
                    <tr>
                        <td>ZZ Plant</td>
                        <td>This plant can withstand drought, low light, and low humidity.</td>
                    </tr>
                    <tr>
                        <td>Peace Lily</td>
                        <td>Purifies the air</td>
                    </tr>
                    <tr>
                        <td>Dieffenbachia</td>
                        <td>Just leave this plant in filtered light and it will thrive.</td>
                    </tr>
                </tbody>
                </Table>
        </div>
    )
}

export default EasyPlants