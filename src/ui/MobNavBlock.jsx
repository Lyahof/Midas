import styled from "styled-components";

const StyledMobNavBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 5rem;
`;

const StyledSubtitle = styled.div`
  padding-left: ${(props) => props.paddingLeft || 0};
  font-size: 1.3rem;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 0.5rem;
`;

function MobNavBlock({ subtitle, children, paddingLeft }) {
  return (
    <StyledMobNavBlock>
      {subtitle && (
        <StyledSubtitle paddingLeft={paddingLeft}>{subtitle}</StyledSubtitle>
      )}
      {children}
    </StyledMobNavBlock>
  );
}

export default MobNavBlock;
