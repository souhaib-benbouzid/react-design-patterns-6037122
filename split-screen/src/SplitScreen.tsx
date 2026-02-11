import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Pane = styled.div<{ weight: number }>`
  flex: ${(props) => props.weight};
`;

const SplitScreen = ({
  leftWeight,
  rightWeight,
  children,
}: {
  leftWeight: number;
  rightWeight: number;
  children: React.ReactNode[];
}) => {
  const [Left, Right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{Left}</Pane>
      <Pane weight={rightWeight}>{Right}</Pane>
    </Container>
  );
};

export default SplitScreen;
