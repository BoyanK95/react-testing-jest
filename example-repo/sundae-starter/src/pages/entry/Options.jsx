import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ScoopOption from './ScoopsOptions';
import ToppingOption from './ToppingOptions';

export default function Options({ optionType }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:3030/${optionType}`)
            .then((res) => setItems(res.data))
            .catch((err) => console.log(err));
    }, [optionType]);

    //TODO replace null with ToppingOption when available
    const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

    const optionsItems = items.map((item) => (
        <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
    ));

    return <div>{optionsItems}</div>;
}

Options.propTypes = {
    optionType: PropTypes.string.isRequired
};
