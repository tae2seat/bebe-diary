import React from 'react';

export default function TagButton({buttonText, onClick}) {
    return (
        <button type="button" onClick={onClick}>
            {buttonText}
        </button>
    );
}

