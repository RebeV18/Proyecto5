import React from 'react';

export const ErrorMessage = ({ message }) => {
    return (
        <div style={{ color: 'red' }}>
            {message}
        </div>
    );
};
