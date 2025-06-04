import React from 'react'

const AppLayout = ({ children }) => {
return (
    <div className="layout">
        <header className="layout__header">Header</header>
        <nav className="layout__nav">Nav</nav>
        <main className="layout__content">
            {children}
        </main>
        <footer className="layout__footer">Footer</footer>
    </div>
    );
};

export default AppLayout;