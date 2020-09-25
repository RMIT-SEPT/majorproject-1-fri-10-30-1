import React, { Component } from 'react'

class Availability extends Component {
    render() {
        return (
            <div id="content">
                <div className="container-content">
                    <h2>People</h2>
                    {/*<h6 class="redirect">Wrong page? <a href="byService">Book by Service</a></h6>*/}
                    <br></br><br></br>

                    <div class="bookingData">
                        <h3>Service: /display chosen service here/</h3>
                        <h3>Person: /display chosen person here/</h3>
                    </div>

                    <table id="availabilityTable">
                        <tr>
                            <td>10/2/2020</td>
                            <td>13:00-14:00</td>
                            <td>Tom Jones</td>
                        </tr>
                        <tr>
                            <td>12/2/2020</td>
                            <td>15:00-17:00</td>
                            <td>Phil Smith</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
export default Availability;
