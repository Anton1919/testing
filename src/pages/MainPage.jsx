import React from 'react';
import Counter from "../components/Counter";

const MainPage = () => {
    return (
        <div data-testid='main-page'>
            <Counter/>
            Main page
        </div>
    );
};

export default MainPage;
