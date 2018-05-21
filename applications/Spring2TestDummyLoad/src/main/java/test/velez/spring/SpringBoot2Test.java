package test.velez.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.actuate.autoconfigure.metrics.MeterRegistryCustomizer;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import io.micrometer.core.instrument.MeterRegistry;

@SpringBootApplication
public class SpringBoot2Test {

    @Bean
    public MeterRegistryCustomizer<MeterRegistry> commonTags() {
        return (registry) -> registry.config()
                .commonTags("application", "Servicio carga");
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringBoot2Test.class, args);
    }

}
