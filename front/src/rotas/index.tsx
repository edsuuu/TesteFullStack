import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Produtos from '../pages/Produtos';

const RotasRegistradas: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Produtos />} />
            </Routes>
        </>

    );
};

export default RotasRegistradas;