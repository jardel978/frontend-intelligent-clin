import styled from "styled-components";

export const ContainerBanner = styled.div`
    margin-top: 7rem;
    
    @media (max-width: 1023px) {
        margin-top: 12rem;
    }

    @media (max-width: 720px) {
        margin-top: 19rem;
    }
`;

export const ContainerImage = styled.div`
    position: relative;
    width: 100%;
    padding: 1rem 0;
`;

export const ContainerContent = styled.div`
    display: flex;
    flex-flow: column wrap;
    position: absolute;
    top: 12%;
    right: 17%;
    width: 42%;
    height: 87%;
`;