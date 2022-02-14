import styled from "styled-components";

export const Container = styled.footer`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    background: #39CCBB;
    margin-top: 15%;
    padding: 1.9rem;

    span {
        position: absolute;
        width: 100%;
        top: 0;
        right: 0;
        font-size: 1.2rem;
        text-align: end;
        padding: 7px;
        transition: box-shadow .2s linear;
        
        &:hover {
            cursor: pointer;
            /* border-radius: .3rem; */
            /* -webkit-box-shadow: inset -2px -2px 31px -6px rgba(40,73,73,1);
            -moz-box-shadow: inset -2px -2px 31px -6px rgba(40,73,73,1);
            box-shadow: inset -2px -2px 31px -6px rgba(40,73,73,1); */
            
            -webkit-box-shadow: 7px 6px 31px -8px rgba(40,73,73,0.75);
            -moz-box-shadow: 7px 6px 31px -8px rgba(40,73,73,0.75);
            box-shadow: 10px 5px 12px -3px rgba(40,73,73,0.75);
        }

    }
    
    @media (max-width: 768px) {
        margin-top: 25%;
    }
`;

export const Nav = styled.nav`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BoxIconsFooter = styled.div`
    align-self: flex-end;

    @media (max-width: 880px) {
        margin-top: 4rem;
        align-self: center;
    }
`;

export const Icon = styled.div`
    color: #284949;
    margin: 1rem;
    font-size: 40px;

    &:hover {
        cursor: pointer;
    }
`;

export const ParagrafroFooter = styled.p`
    position: absolute;
    top: 50%;
    font-size: 1.5rem; 
    margin: 2rem;
    
    @media (max-width: 768px) {
        text-align: center;
    }
`;