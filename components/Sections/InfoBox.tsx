import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import Interweave from 'interweave'

interface ShadowImageProps {
    title?: string;
    description?: string;
}

const InfoBox: NextPage<ShadowImageProps> = (props) => {
    return <div className='md:pl-8 pl-0'>
        <Typography
            variant="h2"
            gutterBottom
            className="text-black text-37 leading-8 md:leading-none md:text-[62px]"
            style={{textShadow: '0px 4px 4px rgb(0 0 0 / 25%)'}}
        >
            <Interweave content={props.title} className='font-["playFairDisplay"]' />
        </Typography>
        <Typography variant="subtitle2" gutterBottom className="text-base md:text-18">
            {props.description}
        </Typography>
    </div>
}

export default InfoBox