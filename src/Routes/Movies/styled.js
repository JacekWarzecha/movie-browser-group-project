import styled from "styled-components";

export const StyledTitle = styled.div`
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    padding-bottom: 24px;
`;

export const StyledMovies = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 324px);
`;

export const StyledMovie = styled.div`
    width: 324px;
    height: 650px;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    padding: 16px;
`;

export const StyledImg = styled.img`
    height: 434px;
    width: 292px;
`;

export const StyledName = styled.div`
    width: 292px;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    margin-bottom: 8px;
`;

export const StyledYear = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #7E839A;
    margin-bottom: 8px;
`;

export const StyledGenre = styled.div`
    margin-bottom: 39px;
`;

export const StyledRate = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const StyledStar = styled.img`
    height: 16px;
    width: 16.5px;
`;

export const StyledAvarage = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #18181B;
`;

export const StyledVotes = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #7E839A;
`;