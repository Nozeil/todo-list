import { Container, Paper, Stack } from '@mantine/core';
import { Todos } from '@/components/TodosList';
import { NewTodo } from './components/NewTodo';

function App() {
  return (
    <Container size="lg" my={20}>
      <Paper component={Container} size="md" mih={`calc(100vh - 40px)`}>
        <Stack spacing="lg">
          <NewTodo />
          <Todos />
        </Stack>
      </Paper>
    </Container>
  );
}

export default App;
