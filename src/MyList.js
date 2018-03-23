import React from 'react';
import PropTypes from 'prop-types';

class MyList extends React.Component {
    render () {
        return(
            <ul>
                {this.props.daftarBelanja.map((item, i) => {
                    return <li>{item}</li>
                })}
            </ul>
        )
    }
}

export default MyList;