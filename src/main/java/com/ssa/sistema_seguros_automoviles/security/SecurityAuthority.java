package com.ssa.sistema_seguros_automoviles.security;

import com.ssa.sistema_seguros_automoviles.logic.Client;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

@AllArgsConstructor
public class SecurityAuthority implements GrantedAuthority {

    private final String rol;

    @Override
    public String getAuthority() {
        return this.rol;
    }
}
