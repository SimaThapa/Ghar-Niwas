import React from 'react';
import {Box} from '@mui/material';
import PremiumListing from '../../components/premiumListing/premiumListingService';
function HomeView(){
    return(
        <>
         <Box component="section">
            <div >
                <PremiumListing/>
            </div>
         </Box>
        </>
    )
}
export default HomeView;