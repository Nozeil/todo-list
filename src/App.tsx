import { Container, Paper, Stack } from '@mantine/core';
import { Todos } from '@/components/Todos';
import { NewTodo } from './components/NewTodo';
import { TodosProvider } from './components/TodosProvider';

function App() {
  return (
    <Container size="lg" my={20}>
      <Paper component={Container} size="md" mih={`calc(100vh - 40px)`}>
        <Stack spacing="lg">
          <TodosProvider>
            <NewTodo />
            <Todos />
          </TodosProvider>
        </Stack>
      </Paper>
    </Container>
  );
}

export default App;
