package com.ssa.sistema_seguros_automoviles.config;

import com.ssa.sistema_seguros_automoviles.logic.Services.SecurityClientDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

    @Autowired
    private SecurityClientDetail userDetailsService;


    @Bean
    public DaoAuthenticationProvider authProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        HttpSecurity httpSecurity = http
                .authorizeHttpRequests((requests) -> requests
                                .requestMatchers(AntPathRequestMatcher.antMatcher("/client/login/*/*")).permitAll()
                                .requestMatchers(AntPathRequestMatcher.antMatcher("/card/**")).permitAll()
                                .requestMatchers(AntPathRequestMatcher.antMatcher("/category/**")).permitAll()
                                .requestMatchers(AntPathRequestMatcher.antMatcher("/coverage/**")).permitAll()
                                .requestMatchers(AntPathRequestMatcher.antMatcher("/insurance/**")).permitAll()
                                .requestMatchers(AntPathRequestMatcher.antMatcher("/vehicle/**")).permitAll()
                                .requestMatchers("/register", "/login").anonymous()
                        //.anyRequest().authenticated()
                );


        return httpSecurity.build();
    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }

}
