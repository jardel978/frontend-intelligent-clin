
import Image from 'next/image';

import capaImg from 'assets/images/capa2.png';
import { Container, ContainerImage, ContainerContent } from './styles';
import { useEffect, useState } from 'react';
import { ToggleImage } from './ToggleImage';
import { TextoBanner } from 'components/TextoBanner';


export const Banner = () => {

    const [toggle, setToggle] = useState(true);

    const myTimeout = setTimeout(() => {
        setToggle(!toggle)
    }, 6000);

    useEffect(() => {
      myTimeout;
    }, [toggle]);


    return (
        <Container>
            <ContainerImage>
                <Image src={capaImg} alt='Capa' />
                <ContainerContent>
                    <ToggleImage
                        toggle={toggle}
                        imagem={capaImg}
                        size='200px'
                        position='absolute' top='10px' rgt='' bottom='100px' left='0' delay='0s'
                    />
                    <ToggleImage
                        toggle={toggle}
                        imagem={capaImg}
                        size='300px'
                        position='absolute' top='' rgt='' bottom='0' left='30px'delay='1s'
                    />
                    <ToggleImage
                        toggle={toggle}
                        imagem={capaImg}
                        size='300px'
                        position='absolute' top='0' rgt='10px' bottom='' left='' delay='2s'
                    />
                    <ToggleImage
                        toggle={toggle}
                        imagem={capaImg}
                        size='300px'
                        position='absolute' top='50px' rgt='0' bottom='0' left='' delay='3s'
                    />
                   <TextoBanner toggle={!toggle} />
                </ContainerContent>
            </ContainerImage>

        </Container>
    );
};
