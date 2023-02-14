import { nanoid } from "nanoid";
import PropTypes from 'prop-types'
import styles from "./PhoneBook.module.css";

const Filter = ({ filterQueue }) => {
    const filterId = nanoid();

    const handleChange = e => {
        const { value } = e.target;

        filterQueue(value.trim().toLowerCase());
    };

    return (
        <div>
            <p className={styles.Filter__title}> Find contacts by name </p>

            <input
            type="text"
            name="filter"
            id={filterId}
            onChange={handleChange}
            className={styles.Filter__label}
            >  
            </input>
        </div>
    );
};

Filter.propTypes = {
    filterQueue: PropTypes.func.isRequired,
};


export default Filter;