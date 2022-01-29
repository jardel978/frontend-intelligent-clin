
import Image from 'next/image';

import capaImg from 'assets/images/capa2.png';
import bannerImg1 from 'assets/images/image 1.png';
import bannerImg2 from 'assets/images/image 2.png';
import bannerImg3 from 'assets/images/image 3.png';
import bannerImg4 from 'assets/images/image 4.png';
import { ContainerBanner, ContainerImage, ContainerContent } from './styles';
import { useEffect, useState } from 'react';
import { ToggleImage } from './ToggleImage';
import { TextoBanner } from 'components/Banner/TextoBanner';


export const Banner = () => {

    const [toggle, setToggle] = useState(true);

    const myTimeout = setTimeout(() => {
        setToggle(!toggle)
    }, 6000);

    useEffect(() => {
      myTimeout;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toggle]);


    return (
        <ContainerBanner>
            <ContainerImage>
                <Image layout='responsive' src={capaImg} alt='Capa' />
                <ContainerContent>
                    <ToggleImage
                        toggle={toggle}
                        imagem={bannerImg1}
                        width='39%' height='30%'
                        position='absolute' top='5%' rgt='' bottom='' left='' delay='0s'
                        />
                    <ToggleImage
                        toggle={toggle}
                        imagem={bannerImg2}
                        width='40%' height='50%'
                        position='absolute' top='0' rgt='15%' bottom='' left='' delay='0.125s'
                        />
                    <ToggleImage
                        toggle={toggle}
                        imagem={bannerImg3}
                        width='40%' height='50%'
                        position='absolute' top='42%' rgt='' bottom='' left='7%'delay='0.25s'
                        />
                    <ToggleImage
                        toggle={toggle}
                        imagem={bannerImg4}
                        width='50%' height='50%'
                        position='absolute' top='50%' rgt='0' bottom='0' left='' delay='0.5s'
                    />
                   <TextoBanner toggle={!toggle} />
                </ContainerContent>
            </ContainerImage>

        </ContainerBanner>
    );
};
