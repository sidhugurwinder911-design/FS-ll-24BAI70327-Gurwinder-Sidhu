package experiment52;

import experiment52.model.Post;
import experiment52.repository.PostRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {
    @Bean
    CommandLineRunner loadData(PostRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.save(new Post("24BAI70327", "Gurwinder Sidhu"));
                repository.save(new Post("24BAI70399", "Maninder virk"));
                repository.save(new Post("24BAI70451", "Naman Walia"));
            }
        };
    }
}
