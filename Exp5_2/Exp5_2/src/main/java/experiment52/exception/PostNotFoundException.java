package experiment52.exception;

public class PostNotFoundException extends RuntimeException {
    public PostNotFoundException(String id) {
        super("Post not found with id: " + id);
    }
}
