import * as React from "react";

import { colors } from "../../styles/colors";
import CKRendered from '../../Images/GallaryImages/ckpaintedandpictured.png';

export function CKRenderedImage ( props ) {
    return (
        <div
            justify='left'
            class='background'
            style={ {
                marginTop: 15,
                marginBottom: 15,
                marginLeft: 15,
                marginRight: 15,
                backgroundColor: colors.ckPurple,
                borderRadius: 12,
                display: "inline-flex",
            } }>
            <div style={ { paddingTop: 20, padding: 20 } }>
                <img src={ CKRendered } alt="cacti" style={ { height: 'auto', width: 350, borderRadius: 8 } } />
            </div>
        </div>
    );
}



