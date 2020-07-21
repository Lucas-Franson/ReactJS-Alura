import React from 'react';
import LinkWrapper from '../../Utils/LinkWrapper';

const Header = () => {
    return (
        <nav>
            <div class="nav-wrapper indigo lighten-2">
                <LinkWrapper to="/" class="brand-logo" activeStyle={{}}>Casa do Código</LinkWrapper>
                <ul class="right">
                    <li><LinkWrapper to='/autores'>Autores</LinkWrapper></li>
                    <li><LinkWrapper to='/livros'>Livros</LinkWrapper></li>
                    <li><LinkWrapper to='/sobre'>Sobre</LinkWrapper></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;