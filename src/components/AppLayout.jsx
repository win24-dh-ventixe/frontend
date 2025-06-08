import React from "react";

const AppLayout = ({ children }) => {
return (
    <>
    <div className="layout-wrapper">
        <div className="container">
            <div className="layout">
                <header className="layout__header">
                    <div className="header__logo">
                        <img className="header__logo-img" src="/images/logos/ventixe-logotype.svg" alt="" />
                        <h2 className="header__logo-text">Ventixe</h2>
                    </div>
                    <h1 className="header__text">Events</h1>
                </header>
                <main className="layout__content">{children}</main>
                <footer className="layout__footer">Footer</footer>
            </div>
        </div>
    </div>
    </>
);
};

export default AppLayout;
