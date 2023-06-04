package com.ssa.sistema_seguros_automoviles.security;

import com.ssa.sistema_seguros_automoviles.logic.Client;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@AllArgsConstructor
public class SecurityClient implements UserDetails {
    private final Client client;

    @Override
    public String getUsername() {
        return client.getUser();
    }

    @Override
    public String getPassword() {
        return client.getPassword();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        if (client.getType_cli() == 1) {
            authorities.add(new SimpleGrantedAuthority("ROLE_ADMIN"));

        } else {
            authorities.add(new SimpleGrantedAuthority("ROLE_CLIENT"));
        }
        return authorities;
    }

    private Collection<? extends GrantedAuthority> getAuthorities(Client user) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        if(user.getType_cli() == 1)
            authorities.add(new SimpleGrantedAuthority("ADMIN"));
        if(user.getType_cli() == 2)
            authorities.add(new SimpleGrantedAuthority("CLI"));
        return authorities;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
