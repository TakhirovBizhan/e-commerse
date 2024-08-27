import * as React from 'react'
import { IconProps } from '../Icon';
import '../../../styles/styles.css';
import '../Icon/Icon.css'


const ArrowDownIcon: React.FC<IconProps> = ({className, color, width = 24, height = 24}) => {


    const iconFill = (color) ? `var(--color-${color})` : 'inherit';
    const styles = {
        height: height,
        width: width
    } as React.CSSProperties;
    
    return (
            <svg
                className={className}
                width={width}
                height={height}
                viewBox='0 0 24 24'
                style={styles}
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M2.33563 8.74741L3.66436 7.25259L12 14.662L20.3356 7.25259L21.6644 8.74741L12 17.338L2.33563 8.74741Z"
                    fill={iconFill} />
            </svg>
    )
}

export default ArrowDownIcon;
