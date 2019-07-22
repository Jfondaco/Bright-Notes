import React from 'react'

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

import DemoFooter from "components/Footers/DemoFooter.js";
import BookCards from 'components/BookCards';
import LibraryContainer from 'components/LibraryContainer';

function LibraryPage() {

    return(
    <div>
        <ExamplesNavbar/>
        <LibraryContainer>
            <BookCards/>
        </LibraryContainer>
        <DemoFooter/>
        
    </div>
    )
}

export default LibraryPage;