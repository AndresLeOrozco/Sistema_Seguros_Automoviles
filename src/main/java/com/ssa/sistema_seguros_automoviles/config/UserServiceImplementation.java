package com.ssa.sistema_seguros_automoviles.config;

import java.util.*;
import com.ssa.sistema_seguros_automoviles.data.Repo.ClientRepo;
import com.ssa.sistema_seguros_automoviles.logic.Client;
import org.springframework.stereotype.Service;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Service
public class UserServiceImplementation implements UserDetailsService {

    @Autowired
    private ClientRepo ServCli;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Client user = ServCli.findByUser(username);
        if (user.getId() == null) {
            throw new UsernameNotFoundException(username + " not found");
        }
        Collection<? extends GrantedAuthority> authorities = this.getAuthorities(user);
        return new org.springframework.security.core.userdetails.User(
                user.getUser(),
                user.getPassword(), // Proporciona la contraseña en texto plano
                true,
                true,
                true,
                true,
                authorities);
    }
    private Collection<? extends GrantedAuthority> getAuthorities(Client user) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        if(user.getType_cli() == 1)
            authorities.add(new SimpleGrantedAuthority("ADMIN"));
        if(user.getType_cli() == 2)
            authorities.add(new SimpleGrantedAuthority("CLI"));
        return authorities;
    }
}
