package test.velez.boot1;

import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.spring.autoconfigure.MeterRegistryCustomizer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringBoot1Test {

    @Bean
    public MeterRegistryCustomizer<MeterRegistry> commonTags() {
        return (registry) -> registry.config()
                .commonTags("application", "Spring boot 1 Example");
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringBoot1Test.class, args);
    }

}
