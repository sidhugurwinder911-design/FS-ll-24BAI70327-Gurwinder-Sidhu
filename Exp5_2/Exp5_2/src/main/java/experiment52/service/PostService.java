package experiment52.service;

import experiment52.dto.PostDTO;
import experiment52.exception.PostNotFoundException;
import experiment52.model.Post;
import experiment52.repository.PostRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PostService {
    private static final Logger log = LoggerFactory.getLogger(PostService.class);

    private final PostRepository repository;

    public PostService(PostRepository repository) {
        this.repository = repository;
    }

    public List<Post> getAllPosts() {
        log.info("Fetching all posts");
        return repository.findAll();
    }

    public Post getPostById(String id) {
        log.info("Fetching post with id={}", id);
        return repository.findById(id)
                .orElseThrow(() -> {
                    log.warn("Post not found with id={}", id);
                    return new PostNotFoundException(id);
                });
    }

    public Post createPost(PostDTO dto) {
        Post post = new Post(UUID.randomUUID().toString(), dto.getText());
        log.info("Creating post with id={}", post.getId());
        return repository.save(post);
    }

    public Post updatePost(String id, PostDTO dto) {
        Post post = getPostById(id);
        post.setText(dto.getText());
        log.info("Updating post with id={}", id);
        return repository.save(post);
    }

    public void deletePost(String id) {
        Post post = getPostById(id);
        repository.delete(post);
        log.info("Deleted post with id={}", id);
    }
}
