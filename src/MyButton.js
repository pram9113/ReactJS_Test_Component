import React from 'react';
import PropTypes from 'prop-types';

class MyButton extends React.Component {
    render () {
        let padding;
        if(this.props.ukuran==="kecil") {
            padding="10px";
        } else if(this.props.ukuran==="besar") {
            padding="25px";
        }
        let styles = {
            backgroundColor: this.props.buttonColor,
            padding: padding
        }

        return (
            <button type="submit" className="btn" style={styles}>
                {this.props.buttonText}
            </button>
        );
    }
}

MyButton.defaultProps = {
    buttonColor: "red",
    ukuran: "kecil"
}

MyButton.propTypes = {
    buttonText: PropTypes.string.isRequired //untuk cek bahwa tipe props tervalidasi
}

export default MyButton;