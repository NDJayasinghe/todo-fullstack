package com.individual.todo.controller;

import com.individual.todo.model.Task;
import com.individual.todo.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*") // allow frontend
public class TaskController {

    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return service.addTask(task);
    }

    @GetMapping("/latest")
    public List<Task> getLatestTasks() {
        return service.getLatestIncompleteTasks();
    }

    @PatchMapping("/{id}/done")
    public Task markAsDone(@PathVariable Long id) {
        return service.markAsDone(id);
    }
}
