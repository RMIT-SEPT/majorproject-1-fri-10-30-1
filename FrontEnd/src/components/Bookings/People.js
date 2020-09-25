import React, { Component } from 'react'

class People extends Component {
    render() {
        return (
            <div id="content">
                <div className="container-content">
                    <h2>People</h2>
                    {/*<h6 class="redirect">Wrong page? <a href="byService">Book by Service</a></h6>*/}
                    <br></br><br></br>

                    <div className="bookingData">
                        <h3>Service: /display chosen service here/</h3>
                    </div>
                    <table id="peopleTable">
                        <tr>
                            <td><a href="/availability">Tom Jones</a></td>
                        </tr>
                        <tr>
                            <td><a href="/availability">Phil Smith</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
export default People;
