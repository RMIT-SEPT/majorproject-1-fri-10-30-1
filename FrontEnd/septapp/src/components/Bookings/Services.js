import React, { Component } from 'react'

class Services extends Component {
    render() {
        return (
            <div id="content">
                <div className="container-content">
                    <h2>Services</h2>
                    {/*<h6 class="redirect">Wrong page? <a href="byService">Book by Service</a></h6>*/}
                    <br></br><br></br>

                    <table id="serviceTable">
                        <tr>
                            <td><a href="/people">Driving Test</a></td>
                        </tr>
                        <tr>
                            <td><a href="/people">Jet Ski Licence</a></td>
                        </tr>
                        <tr>
                            <td><a href="/people">RSA Session</a></td>
                        </tr>
                    </table>

                </div>
            </div>
        )
    }
}
export default Services;
