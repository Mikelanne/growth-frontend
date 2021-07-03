import Table from "react-bootstrap/table"

const HardPlants = () => {
    return(
        <div className="table">
            <h4>Looking For a Challenge? Here Are Some High Maintenance Plants</h4>
           <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Plant Name</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Bonsai Tree</td>
                        <td>You'll need to know how to care for bonsai as well as the variant you purchase. They need constant care and maintenance. Though very beautiful, they require a lot of work.</td>
                    </tr>
                    <tr>
                        <td>Boston Fern</td>
                        <td>Boston Ferns need a cool place with high humidity and indirect light. Soil must remain damp.</td>
                    </tr>
                    <tr>
                        <td>Fiddle Leaf Fig</td>
                        <td>The Fiddle Leaf Fig do not adapt well to new enviornments. It needs the exact right amount of light and humidity. You must find it's permanent home and incorporate it's care into your schedule.</td>
                    </tr>
                    <tr>
                        <td>Venus Flytrap</td>
                        <td>Venus Flytraps have a sensitive root system. They require special soil and either rail or distilled water. They feed on insects in the wild, so you'll have to make sure you wil be able to feed them before you make that purchase.</td>
                    </tr>
                    <tr>
                        <td>Triostar Stromanthe</td>
                        <td>This plant is native to the Amazon which makes it incredibly hard to care for. It requires a lot of light, but not direct light. The soil must be evenly saturated and it needs high humidity.</td>
                    </tr>
                    <tr>
                        <td>Zebra Plant</td>
                        <td>The Zebra Plant requires a lot of light, but not direct. You may have to incorporate artificial light. The soil requires the right amount of moisture.</td>
                    </tr>
                    <tr>
                        <td>Inch Plant</td>
                        <td>Requires bright, indrect light.Soil must be slightly moist. Must be misted frequently. </td>
                    </tr>
                </tbody>
                </Table>
        </div>
    )
}

export default HardPlants