package experiment51.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class PostDTO {

    @NotBlank(message = "Post text must not be blank")
    @Size(max = 280, message = "Post text must not exceed 280 characters")
    private String text;

    public PostDTO() {
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}