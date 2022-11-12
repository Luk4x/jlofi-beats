import styled from 'styled-components';

export const StyledHeader = styled.header`
    margin-top: 50px;
    background-color: ${({ theme }) => theme.backgroundLevel1};
    img {
        border-radius: 50%;
    }

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 30px;
        gap: 16px;
    }
`;

export const StyledBanner = styled.div`
    background: #222;
    width: 100%;
    height: 230px;
`;
