import type { NextPage } from 'next'

interface ShadowImageProps {
    shadowColor?: string;
    imageUrl?: string;
}

const ShadowImage: NextPage<ShadowImageProps> = (props) => {
    return <div
        className="relative z-20 after:content-[''] after:bg-yellow after:absolute after:md:max-w-[555px] after:max-w-full after:md:min-h-[320px] after:w-full after:h-full after:z-0 after:md:right-[30px] after:right-0 after:left-0 after:bottom-[-20px] after:rounded-md"
    >
        <img
            src={props.imageUrl ? props.imageUrl : ''}
            alt="Opportunities"
            width={555}
            height={525}
            className='z-30 relative m-auto' />
    </div>
}

export default ShadowImage