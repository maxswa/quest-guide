import React from "react";

const Header = ({show}) => {
    if (show) {
        return (
            <div></div>
        )
    }
    else {
        return (
            <div />
        )
    }
}

export default Header;
