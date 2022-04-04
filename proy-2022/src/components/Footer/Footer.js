import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <footer>
                <ul class="team">
                    <li>Ian Jamui</li>
                    <li>Cami</li>
                    <li>Pedro</li>
                </ul>
            </footer>
         );
    }
}
 
export default Footer;