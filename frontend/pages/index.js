import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 0 10%;
`;

const Bold = styled.span`
  font-style: bold;
  font-weight: 800;
  font-size: 1.2rem;
`;

const Index = () => (
  <StyledDiv>
    <h2>Everyone has the right to a voice</h2>
    <p>
      This is a natural right. Everyone should have access to the ability to
      communicate in a way that is comfortable and familiar to them. Everyone
      needs to be able to express themselves as an individual. There should be
      no barriers to speech.
    </p>
    <h4>What We Hope to Achieve</h4>
    <p>
      With our application you will <Bold>NEVER</Bold> be charged any kind of
      fee. The users can customize the layout of their tiles for their best
      need. Therapists, family-memebers, and other care takers can also add and
      move these around as needed.
    </p>
  </StyledDiv>
);

export default Index;
