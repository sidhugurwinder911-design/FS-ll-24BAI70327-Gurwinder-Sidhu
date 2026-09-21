package experiment52.controller;

import experiment52.dto.ApiResponse;
import experiment52.dto.PostDTO;
import experiment52.model.Post;
import experiment52.service.PostService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    private static final Logger log = LoggerFactory.getLogger(PostController.class);

    private final PostService service;

    public PostController(PostService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Post>>> getAllPosts() {
        return ResponseEntity.ok(new ApiResponse<>(
                "success", "Fetched all posts", service.getAllPosts()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Post>> getPostById(@PathVariable String id) {
        log.info("GET /api/posts/{}", id);
        return ResponseEntity.ok(new ApiResponse<>(
                "success", "Fetched post", service.getPostById(id)));
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Post>> createPost(@Valid @RequestBody PostDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse<>(
                "success", "Post created successfully", service.createPost(dto)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Post>> updatePost(
            @PathVariable String id, @Valid @RequestBody PostDTO dto) {
        return ResponseEntity.ok(new ApiResponse<>(
                "success", "Post updated successfully", service.updatePost(id, dto)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deletePost(@PathVariable String id) {
        service.deletePost(id);
        return ResponseEntity.ok(new ApiResponse<>(
                "success", "Post deleted successfully", null));
    }
}
