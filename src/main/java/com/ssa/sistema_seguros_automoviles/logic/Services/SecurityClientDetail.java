package com.ssa.sistema_seguros_automoviles.logic.Services;

import com.ssa.sistema_seguros_automoviles.data.Repo.ClientRepo;
import com.ssa.sistema_seguros_automoviles.logic.Client;
import com.ssa.sistema_seguros_automoviles.security.SecurityClient;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SecurityClientDetail implements UserDetailsService {

    private final ClientRepo clientRepo;

    public SecurityClientDetail(ClientRepo clientRepo) {
        this.clientRepo = clientRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        var optClient = this.clientRepo.findByUser(username);
        Optional<Client> optClient = Optional.ofNullable(clientRepo.findByUser(username));

        if (optClient.isPresent()) {
            return new SecurityClient(optClient.get());
        }

        throw new UsernameNotFoundException("User not found: " + username);
    }
}
