import * as React from 'react';
import { useState } from 'react';
import './Text.css'
import '../../styles/styles.css'

export type TextProps = {
    /** Дополнительный класс */
    className?: string;
    /** Стиль отображения */
    view?: 'title' | 'button' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
    /** Html-тег */
    tag?:  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
    /** Начертание шрифта */
    weight?: 'normal' | 'medium' | 'bold';
    /** Контент */
    children: React.ReactNode;
    /** Цвет */
    color?: 'primary' | 'secondary' | 'accent';
    /** Максимальное кол-во строк */
    maxLines?: number;
};

const Text: React.FC<TextProps> = (
    {className,
        view,
        tag: Tag = 'p',
        weight,
        children,
        color,
        maxLines
    }
) => {
    const [fontWeight, setFontWeight] = useState(weight);
    if(!weight && !view){
        setFontWeight('normal')
    }
    const styles = {
        fontWeight: fontWeight,
        color: color ? ` var(--color-${color})` : 'inherit',
        display: maxLines ? '-webkit-box' : 'block',
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: maxLines ? 'vertical' : undefined,
        overflow: maxLines ? 'hidden' : undefined,
    } as React.CSSProperties;

    const classValue = `${(className) ? className: ''} ${(view) ? view : ''}`
    return (
        <>
        <Tag className={classValue} style={styles}> {children} </Tag>
        </>
    )
}

export default Text;
