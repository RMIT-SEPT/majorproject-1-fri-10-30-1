package com.rmit.sepy.fri1.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
//Defines spring framwork
@SpringBootApplication
public class Application {
    //Application start
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            //Bypasses CORS error when creating bookings
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/booking").allowedOrigins("http://localhost:3000");
            }
        };
    }

}
