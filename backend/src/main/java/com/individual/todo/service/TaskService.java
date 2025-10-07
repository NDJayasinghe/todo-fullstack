package com.individual.todo.service;

import com.individual.todo.model.Task;
import com.individual.todo.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public Task addTask(Task task) {
        return repository.save(task);
    }

    public List<Task> getLatestIncompleteTasks() {
        return repository.findTop5ByCompletedFalseOrderByCreatedAtDesc();
    }

    public Task markAsDone(Long id) {
        Task task = repository.findById(id).orElseThrow();
        task.setCompleted(true);
        return repository.save(task);
    }
}
