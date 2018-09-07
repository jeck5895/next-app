import React, { Component } from 'react'
import Head from 'next/head'
import bulma from '../assets/styles/bulma.scss';

/**
 * Component imports
 */

import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'

class Index extends Component {

    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: bulma }} />
                <Head> 
                    <title>My Portfolio</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
                    <link href="https://fonts.googleapis.com/css?family=IM+Fell+Great+Primer" rel="stylesheet"></link>
                </Head>
                <Navbar />
                <div className="fixed-box">
                    <Jumbotron/>
                </div>
            </div>
        );
    }
}
export default Index;