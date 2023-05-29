package com.ssa.sistema_seguros_automoviles;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = "com.ssa.sistema_seguros_automoviles.data.Repo")
public class SistemaSegurosAutomovilesApplication {

    public static void main(String[] args) {
        SpringApplication.run(SistemaSegurosAutomovilesApplication.class, args);
    }

}
