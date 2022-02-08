import type { NextPage } from 'next'
import { Button, Container, Grid, Typography } from '@mui/material'
import Feature from '../../components/Sections/Feature'
import InfoBox from '../../components/Sections/InfoBox'
import ShadowImage from '../../components/Sections/ShadowImage'
import Interweave from 'interweave'

const features = [
  {
    key: 1,
    title: 'Customers',
    description: 'See our portfolio',
    imageUrl: '/customers.png',
    url: '/portfolio'
  },
  {
    key: 2,
    title: 'Suppliers',
    description: 'Work with us',
    imageUrl: '/suppliers.png',
    url: '/portfolio'
  },
  {
    key: 3,
    title: 'Team',
    description: 'Sign in or apply',
    imageUrl: '/team.png',
    url: '/portfolio'
  }
]

const Home: NextPage = () => {
  return (
    <main>
      <Grid container spacing={2} className='bg-cb0007 py-[30px] relative mt-0'>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={6} sm={12} className='py-[100px] px-8 md:px-0'>
              <Typography
                variant="h1"
                gutterBottom
                className='text-white text-37 md:text-80 mb-[30px]'
              >
                <Interweave content={`To bringing people <em>together.</em>`} className='font-["playFairDisplay"]' />
              </Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                className='text-white text-18 tracking-[.01] mb-[50px] font-["NiveauGrotesk"]'
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </Typography>
              <Button
                variant="contained"
                className='bg-yellow hover:bg-yellow text-black text-18x75 font-bold px-[56px] py-[20px] font-["NiveauGrotesk"] shadow-none hover:shadow-none'
                size="large"
              >
                Portfolio
              </Button>
            </Grid>
            <Grid item md={6} sm={12} className='px-8 md:pr-0'>
              <div
                className="relative z-20 after:content-[''] after:bg-yellow after:absolute after:max-w-[172px] after:max-h-[172px] after:md:max-w-[315px] after:md:max-h-[320px] after:w-full after:h-full after:z-0 after:right-[80px] after:bottom-[40px] after:rounded-md"
              >
                <div
                  className="max-w-[468px] w-full mb-[14px]"
                >
                  <img
                    src={'/top-left-img.png'}
                    alt="Research"
                    width={220}
                    height={90}
                    className='rounded-lg drop-shadow-3xl mr-auto z-30 relative md:w-[460px] md:h-[220px]'
                  />
                </div>
                <div
                  className="max-w-[261px] w-full ml-auto"
                >
                  <img
                    src={'/bottom-right-img.png'}
                    alt="Work"
                    width={120}
                    height={240}
                    className='rounded-lg drop-shadow-3xl ml-auto z-30 relative md:w-[260px] md:h-[317px]'
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <div className='absolute md:bottom-[-130px] bottom-[-40px] right-0 z-20'>
          <img src={'/yellow-circle.svg'} alt="Circle" width={120} height={120} className='md:w-[250px] md:h-[279px]' />
        </div>
      </Grid>

      <div className='relative z-20 mt-[16px] mb-[30px] mx-0 after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:bg-white after:z-10 after:content-[""] after:w-full after:h-full after:max-w-5xl'>
        <Grid container spacing={2} className='py-[30px] px-8 relative z-20'>
          <Container maxWidth="lg" className='pr-0'>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item md={6} sm={12} className='py-[56px] md:py-[100px]'>
                <ShadowImage
                  shadowColor='bg-yellow'
                  imageUrl='/number-enough.png'
                />
              </Grid>
              <Grid item md={6} sm={12} className='py-[35px] md:py-[100px]'>
                <InfoBox
                  title='Knowing the numbers is never <em>enough.</em>'
                  description={`It's about understanding the opportunities and challenges behind the numbers — and planning for a stronger future. What's the right product selection for your customers? Which tools and information could make your business even more successful? At Southern Glazer's, we tailor our services for each and every one of our customers. Because we know that when we come together, there's always something to celebrate.`}
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>

        <Grid container spacing={2} className='pb-[70px] relative z-20'>
          <Container maxWidth="lg">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {
                features.map((feature) => (
                  <Grid key={feature.key} item sm={4} xs={12} className='text-center md:mb-0 mb-6'>
                    <Feature
                      title={feature.title}
                      description={feature.description}
                      imageUrl={feature.imageUrl}
                      url={feature.url}
                    />
                  </Grid>
                ))
              }
            </Grid>
          </Container>
        </Grid>
      </div>
    </main>
  )
}

export default Home
