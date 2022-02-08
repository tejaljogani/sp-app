import type { NextPage } from 'next'
import { Link, Typography } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';

interface FeatureProps {
    title?: string;
    description?: string;
    imageUrl?: string;
    url?: string;
}

const Feature: NextPage<FeatureProps> = (props) => {
    return <div>
        <img src={props.imageUrl ? props.imageUrl : ''} alt={props.title} width={80} height={80} className='m-auto md:w-[172px] md:h-[172px]' />
        <Typography variant="h3" component="div" gutterBottom className='md:text-[37px] text-2xl font-["playFairDisplay"] m-2'>
            {props.title}
        </Typography>
        <Link
            href={props.url}
            className='no-underline flex items-center justify-center'
        >
            <span className='md:text-[23px] text-base opacity-50 font-["NiveauGrotesk"] cursor-pointer text-black'>{props.description}</span>
            <ArrowRight className='text-red'/>
        </Link>
    </div>
}

export default Feature