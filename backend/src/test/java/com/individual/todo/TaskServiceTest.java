package com.individual.todo;

import com.individual.todo.model.Task;
import com.individual.todo.repository.TaskRepository;
import com.individual.todo.service.TaskService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.assertj.core.api.Assertions.assertThat;

public class TaskServiceTest {
    @Test
    void addTask_shouldSaveTask() {
        TaskRepository repo = Mockito.mock(TaskRepository.class);
        TaskService service = new TaskService(repo);
        Task t = new Task();
        t.setTitle("Sample");
        Mockito.when(repo.save(t)).thenReturn(t);
        Task saved = service.addTask(t);
        assertThat(saved.getTitle()).isEqualTo("Sample");
    }
}
