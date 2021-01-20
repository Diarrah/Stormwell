import React, { useContext } from 'react';
import { StormwellContext } from '../App';

const Footer = () => {
    const { footerEl } = useContext(StormwellContext);

    return (
        <div className="footer" ref={footerEl}>
            <p>Drink Responsibly.</p>
            <small className="copyright">© 2021. All Rights Reserved.</small>
        </div>
    )
}

export default Footer