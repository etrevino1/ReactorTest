package test.velez.boot2;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.actuate.autoconfigure.metrics.MeterRegistryCustomizer;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.client.WebClient;
import io.micrometer.core.instrument.MeterRegistry;

@SpringBootApplication
public class SpringBoot2TestAplication {
  
  @Value("${loadtarget.host}")
  private String targetHost;
  
  @Bean
  public WebClient webClient() {
    return WebClient.builder()
        .baseUrl(targetHost)
        .build();
  }
  
  @Bean
  public MeterRegistryCustomizer<MeterRegistry> commonTags() {
      return (registry) -> registry.config()
              .commonTags("application", "Ejemplo boot 2");
  }
  
  @Bean
  public PassThroughHandler passThroughHandler() {
      return new PassThroughHandler(webClient());
  }


  public static void main(String[] args) {
      SpringApplication.run(SpringBoot2TestAplication.class, args);
  }
}
