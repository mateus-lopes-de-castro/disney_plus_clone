import React from 'react';

import { Container } from './styles';

interface IMenuItemLink {
    name: string;
    url: string;
    img: string;
}

const MenuItemLink: React.FC<IMenuItemLink> = ({ img, url, name }) => {
    return (
        <Container href={url}>
            <img src={img} alt={name} />
            <span>{name}</span>
        </Container>
    )
}

export default MenuItemLink;