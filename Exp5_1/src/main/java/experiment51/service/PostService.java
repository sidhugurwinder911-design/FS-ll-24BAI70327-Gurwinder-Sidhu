package experiment51.service;

import experiment51.dto.PostDTO;
import experiment51.model.Post;
import experiment51.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PostService {

    private final PostRepository repository;

    public PostService(PostRepository repository) {
        this.repository = repository;
    }

    public List<Post> getAllPosts() {
        return repository.findAll();
    }

    public Post getPostById(String id) {
        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Post not found with id: " + id));
    }

    public Post createPost(PostDTO dto) {

        Post post = new Post(
                UUID.randomUUID().toString(),
                dto.getText()
        );

        return repository.save(post);
    }

    public Post updatePost(String id, PostDTO dto) {

        Post post = getPostById(id);

        post.setText(dto.getText());

        return repository.save(post);
    }

    public void deletePost(String id) {

        Post post = getPostById(id);

        repository.delete(post);
    }
}