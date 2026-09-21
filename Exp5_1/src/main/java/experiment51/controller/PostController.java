package experiment51.controller;

import experiment51.dto.ApiResponse;
import experiment51.dto.PostDTO;
import experiment51.model.Post;
import experiment51.service.PostService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostService service;

    public PostController(PostService service) {
        this.service = service;
    }

    // GET ALL POSTS
    @GetMapping
    public ResponseEntity<ApiResponse<List<Post>>> getAllPosts() {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        "success",
                        "Fetched all posts",
                        service.getAllPosts()
                )
        );
    }

    // GET ONE POST
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Post>> getPostById(
            @PathVariable String id) {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        "success",
                        "Fetched post",
                        service.getPostById(id)
                )
        );
    }

    // CREATE POST
    @PostMapping
    public ResponseEntity<ApiResponse<Post>> createPost(
            @Valid @RequestBody PostDTO dto) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(
                        new ApiResponse<>(
                                "success",
                                "Post created successfully",
                                service.createPost(dto)
                        )
                );
    }

    // UPDATE POST
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Post>> updatePost(
            @PathVariable String id,
            @Valid @RequestBody PostDTO dto) {

        return ResponseEntity.ok(
                new ApiResponse<>(
                        "success",
                        "Post updated successfully",
                        service.updatePost(id, dto)
                )
        );
    }

    // DELETE POST
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deletePost(
            @PathVariable String id) {

        service.deletePost(id);

        return ResponseEntity.ok(
                new ApiResponse<>(
                        "success",
                        "Post deleted successfully",
                        null
                )
        );
    }
}