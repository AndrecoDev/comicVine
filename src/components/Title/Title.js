import React from 'react';

const styles = ({
    title: {
        textAlign: 'center',
        marginTop: 10,
    }
})

const Title = () => {
    return (
        <div style={styles.title}>
            <h1>Comic Book</h1>
        </div>
    )
}

export default Title;