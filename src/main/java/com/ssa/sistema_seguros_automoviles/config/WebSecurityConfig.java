package com.ssa.sistema_seguros_automoviles.config;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.proxy.NoOp;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class WebSecurityConfig {

//    @Bean
//    public UserDetailsService userDetailService(){
//        // La interfaz de UserDetailService tiene que retornar este metodo
//        // un UserDetails a partir de un nombre de usuario.
//        //Es el administrador de credenciales
//
//
//        var user = User.withUsername("1")
//                .password("0")
//                .roles("read")
//                .build();
//
//        return new InMemoryUserDetailsManager(user);
//
//    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

}