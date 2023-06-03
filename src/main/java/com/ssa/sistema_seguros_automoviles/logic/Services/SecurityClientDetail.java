package com.ssa.sistema_seguros_automoviles.logic.Services;

import com.ssa.sistema_seguros_automoviles.data.Repo.ClientRepo;
import com.ssa.sistema_seguros_automoviles.security.SecurityClient;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;


public class SecurityClientDetail implements UserDetailsService {

    private final ClientRepo clientRepo;

    public SecurityClientDetail(ClientRepo clientRepo) {
        this.clientRepo = clientRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var optClient = this.clientRepo.findByUser(username);

        if (optClient != null){
            return new SecurityClient(optClient);
        }
        throw new UsernameNotFoundException("User not found: " + username);

    }
}
