import Table from "react-bootstrap/table"

const SleepyPlants = () => {
    return(
        <div className="table">
            <h4>Plants That Promote Sleep and Peace</h4>
           <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Plant Name</th>
                        <th>Difficulty</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Aloe Vera</td>
                        <td>Beginner</td>
                        <td>Aloe Vera releases oxygen and purifies the air promoting healthy sleep.</td>
                    </tr>
                    <tr>
                        <td>Areca Palm</td>
                        <td>Moderate</td>
                        <td>Areca Palm increases humidity, releaves sinus issues, and purifies the air.</td>
                    </tr>
                    <tr>
                        <td>English Ivy</td>
                        <td>Beginner</td>
                        <td>English Ivy decreases mold and feces in the air and helps alleviate asthma symptoms. Toxic to kids and animals if ingested.</td>
                    </tr>
                    <tr>
                        <td>Snake Plant</td>
                        <td>Beginner</td>
                        <td>Snake plants increase oxygen levels and purify the air. Toxic to pets if ingested.</td>
                    </tr>
                    <tr>
                        <td>Spider Plant</td>
                        <td>Moderate</td>
                        <td>Filters the air and increases oxygen. Spider Plants also help eliminate oders.</td>
                    </tr>
                    <tr>
                        <td>Peace Lily</td>
                        <td>Beginner</td>
                        <td>Purifies the air</td>
                    </tr>
                    <tr>
                        <td>Chinese Money Plant</td>
                        <td>Moderate</td>
                        <td>Said to eleviate anxiety and stress from your life.</td>
                    </tr>
                </tbody>
                </Table>
        </div>
    )
}

export default SleepyPlants