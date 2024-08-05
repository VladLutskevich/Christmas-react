import styled from 'styled-components';

const PageContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
align-content: flex-start;
width: 100%;
max-width: 1600px;
height: calc(100vh - 140px);
min-height: 750px;
margin: 0 auto;
padding: 0 10px;
@media (max-width: 768px) {
    flex-direction: column;
}
`;

export { PageContainer };
