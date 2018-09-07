import React, { Component } from 'react'
import Head from 'next/head'
import bulma from '../assets/styles/bulma.scss';

class Index extends Component {

    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: bulma }} />
                <Head> 
                    <title>Next App</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                </Head>
                <div className="container">
                    This is home page
                </div>
            </div>
        );
    }
}
export default Index;