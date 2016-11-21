import React, { PropTypes } from 'react';

const Form = ({ref,onSubmit}) => {
    return (
        <form
            onSubmit={onSubmit}
        >
            <input 
                ref={ref}
            />
            <button type="submit">
                Add Todo
            </button>
        </form>
    );
};

export default Form;