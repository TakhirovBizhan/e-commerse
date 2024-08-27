import React from 'react';
import Text from '../Text';
import './Card.css';
import '../../styles/styles.css'

export type CardProps = {
    /** Дополнительный classname */
    className?: string,
    /** URL изображения */
    image: string;
    /** Слот над заголовком */
    captionSlot?: React.ReactNode;
    /** Заголовок карточки */
    title: React.ReactNode;
    /** Описание карточки */
    subtitle: React.ReactNode;
    /** Содержимое карточки (футер/боковая часть), может быть пустым */
    contentSlot?: React.ReactNode;
    /** Клик на карточку */
    onClick?: React.MouseEventHandler;
    /** Слот для действия */
    actionSlot?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
    className='',
    image,
    captionSlot,
    title,
    subtitle,
    contentSlot,
    onClick,
    actionSlot
}) => 
    {
        return (
            <>
            <div onClick={onClick} className={`card_container ${className}`}>
                <img src={image} alt="card_image" />
                    <ul className='card_content_list'>
                        <li className='card_content_item'>
                            {subtitle}
                            <Text maxLines={2} view='p-20' weight='medium'>{title}</Text>
                            <Text view='p-16' maxLines={3} color='secondary'>{captionSlot}</Text>
                        </li>
                        <li className='card_price_button'>
                        {contentSlot}
                        {actionSlot}
                        </li>
                    </ul>
            </div>
            </>
        )
    };

export default Card;
